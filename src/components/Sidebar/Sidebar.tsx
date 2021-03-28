import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
/**
 * @material-ui/core components
 */
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';

/**
 * Import dependencies
 */


const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
		drawerOpen: {
			width: drawerWidth,
			backgroundColor: '#44474b',
			transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: '#44474b',
			overflowX: 'hidden',
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9) + 1,
			},
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: '0 8px',
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		}
	}),
);

const Sidebar = ({...props}) => {
	const classes = useStyles();
	const theme = useTheme();
	const { routes, handleDrawerClose, drawerOpen } = props;

	const links = (
		<List>
			{routes.map((prop, key) => {
				return (
					<NavLink
						to={prop.layout + prop.path}
						activeClassName='active'
						key={key}
						style={{ textDecoration: 'none', color: '#ffffff' }}
					>
						<ListItem button key={prop.name}>
							<ListItemIcon style={{ color: '#ffffff' }}><prop.icon/></ListItemIcon>
							<ListItemText primary={prop.name} />
						</ListItem>
					</NavLink>
				);
				}
			)}
		</List>
	);
	const brand = (
		<div style={{flexGrow: 1}}>
			<a
				href='/admin/dashboard'
			>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img src='https://i.ibb.co/Kzk4Zz8/fourasol.png' width={'80%'} alt='logo'/>
				</div>
			</a>
		</div>
	);
	return (
		<ErrorBoundary>
			<Drawer
			variant='permanent'
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: drawerOpen,
				[classes.drawerClose]: !drawerOpen,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: drawerOpen,
					[classes.drawerClose]: !drawerOpen,
				}),
			}}
			open={drawerOpen}
		>
			<div className={classes.toolbar}>
				{brand}
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Divider />
			{links}
		</Drawer>
		</ErrorBoundary>
	)
};

export default Sidebar;