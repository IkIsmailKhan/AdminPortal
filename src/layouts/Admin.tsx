import React, { useEffect, SyntheticEvent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';


import routes from '../routes';
import Navbar from '../components/Navbars/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import OrganizationSettings from '../views/OrganizationSettings/OrganizationSettings';
import Organizations from '../views/OrganizationSettings/SwitchOrganization';
import OrganizationProfile from '../views/OrganizationProfile/OrganizationProfile';
import UserProfile from '../views/Users/UserProfile';
import UserProfileSettings from '../views/Users/UserProfileSettings';
import UserDetails from '../views/Users/UserDetails';
import ProjectDetails from '../views/Projects/ProjectDetails';
import CustomerDetails from '../views/Customers/CustomerDetails';
import { robins } from '../robins';
import CustomizedSnackbars from 'src/components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
const { SimplusAuthRobin } = robins;

const switchRoutes = (props) => (
	<Switch>
		<Route exact path='/admin/organization/:organizationId/profile' component={OrganizationProfile} />
		<Route exact path='/admin/organization/:organizationId/settings' component={OrganizationSettings} />
		<Route exact path='/admin/organization' component={Organizations} />
		<Route exact path='/admin/profile/:userId' component={UserProfile} />
		<Route exact path='/admin/profile/:userId/settings' component={UserProfileSettings} />
		<Route exact path='/admin/users/:userId/details' component={UserDetails} />
		<Route exact path='/admin/projects/:projectId/details' component={ProjectDetails} />
		<Route exact path='/admin/customers/:customerId/details' component={CustomerDetails} />
		{routes.map((prop, key) => {
				if (prop.layout === '/admin') {
					return (
						<Route
							exact
							history={props.history}
							path={prop.layout + prop.path}
							component={prop.component}
							key={key}
						/>
					);
				}
				return null;
			})}
		<Redirect from='/admin' to='/admin/dashboard' />
	</Switch>
);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: '0 8px',
			...theme.mixins.toolbar,
		},
	}),
);

/**
 * App Layout
 */

@connectRobin([SimplusAuthRobin])
const Admin = (props): JSX.Element => {
	const classes = useStyles();
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [loggedInUser, setLoggedInUser] = React.useState({});
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});

	const handleToastClose = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setNotification({...notification, toastOpen: false, toastMessage: undefined});
	}

	const handleToastOpen = (toastVariant, toastMessage) => {
		setNotification({...notification, toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage});
	}

	/**
	 * Set drawer open state to true
	 */
	function handleDrawerOpen(): void {
		setDrawerOpen(true);
	}

	/**
	 * Set drawer open state to false
	 */
	function handleDrawerClose(): void {
		setDrawerOpen(false);
	}

	/**
	 * component will mount
	 */
	const fetchLoggedInUser = () => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('loggedInUserInfo', `/users/loggedIn/info`)).then(() => {
			const userInfo = SimplusAuthRobin.getResult('loggedInUserInfo');
			setLoggedInUser({...loggedInUser, ...userInfo.data})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}


	/**
	 * Component did mount
	 */
	useEffect(() => {
		fetchLoggedInUser()
	}, [])

	return (
		<ErrorBoundary>
			{
				Object.keys(loggedInUser).length ?
				<div className={classes.root}>
					<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
					<CssBaseline />
					<Navbar handleDrawerOpen={handleDrawerOpen} drawerOpen={drawerOpen} history={props.history} userInfo={loggedInUser}/>
					<Sidebar handleDrawerClose={handleDrawerClose} drawerOpen={drawerOpen} routes={routes}/>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						{switchRoutes(props)}
					</main>
				</div>
				:
				null
			}
		</ErrorBoundary>
	);
}

const AdminLayout = withRouter(Admin);
export default AdminLayout;