import React, { useEffect, SyntheticEvent } from 'react';
import {
	makeStyles,
	Theme,
	Grid,
	Typography,
	CircularProgress,
	Card,
	CardContent,
	Button,
	CardMedia
} from '@material-ui/core';
import CustomizedSnackbars from 'src/components/Toast/Toast';
import { connectRobin } from '@simplus/robin-react';

import { robins } from '../../robins';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
const { SimplusAuthRobin } = robins;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '20px'
	},
	paperPadding: {
		padding: theme.spacing(3, 2),
	},
	icon: {
		margin: theme.spacing(2),
	},
	progress: {
		margin: theme.spacing(2),
	},
	card: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
		width: '250px'
	},
	cover: {
		width: 151,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	  },
}))

interface KPI {
	'customerCount': string,
	'userCount': string,
	'projectCount': string,
}

@connectRobin([SimplusAuthRobin])
const Dashboard = (props) => {
	const classes = useStyles();

	const [loading, setLoading] = React.useState(false);
	const [KPI, setKPI] = React.useState<KPI>({
		'customerCount': '0',
		'userCount': '0',
		'projectCount': '0',
	});
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

	const fetchKPI = () => {
		setLoading(true);
		SimplusAuthRobin.when(SimplusAuthRobin.get('KPI', `/dashboard/kpi`)).then(() => {
			setLoading(false);
			const KPI = SimplusAuthRobin.getResult('KPI').data;
			setKPI({
				...KPI,
				'customerCount': KPI.customerCount,
				'userCount': KPI.userCount,
				'projectCount': KPI.projectCount,
			})
		}).catch(err => {
			setLoading(false);
			handleToastOpen('error', err.response.data.message)
		})
	}

	const goto = (redirectTo) => {
		props.history.push(redirectTo);
	}

	useEffect(() => {
		fetchKPI()
	}, [])

	return (
		<ErrorBoundary>
			<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
			<div className={classes.root}>
			{loading ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><CircularProgress className={classes.progress} /></div> :
				<Grid container direction='row' justify='space-around' alignItems='center' spacing={4}>
					<Grid item>
						<Card className={classes.card}>
							<div className={classes.details}>
								<CardContent className={classes.content}>
									<Typography component="h2" variant="h2">
										{KPI.customerCount}
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Customers
									</Typography>
								</CardContent>
								<div className={classes.controls}>
									<Button size="small" onClick={() => goto('/admin/dashboard')}>Learn More</Button>
								</div>
							</div>
							<CardMedia
								className={classes.cover}
								image={`/src/assets/img/organization-avatar.png`}
								title="Organizations"
							/>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<div className={classes.details}>
								<CardContent className={classes.content}>
								<Typography component="h2" variant="h2">
									{KPI.projectCount}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary">
									Projects
								</Typography>
								</CardContent>
								<div className={classes.controls}>
									<Button size="small" onClick={() => goto('/admin/dashboard')}>Learn More</Button>
								</div>
							</div>
							<CardMedia
								className={classes.cover}
								image={`/src/assets/img/applications-avatar.png`}
								title="Applications"
							/>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.card}>
							<div className={classes.details}>
								<CardContent className={classes.content}>
								<Typography component="h2" variant="h2">
									{KPI.userCount}
								</Typography>
								<Typography variant="subtitle1" color="textSecondary">
									Users
								</Typography>
								</CardContent>
								<div className={classes.controls}>
									<Button size="small" onClick={() => goto('/admin/users')}>Learn More</Button>
								</div>
							</div>
							<CardMedia
								className={classes.cover}
								image={`/src/assets/img/users-avatar.png`}
								title="Users"
							/>
						</Card>
					</Grid>
				</Grid>
			}
			</div>
		</ErrorBoundary>
	)
};

export default Dashboard;