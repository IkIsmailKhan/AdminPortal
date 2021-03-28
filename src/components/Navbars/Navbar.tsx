import React from 'react';
import clsx from 'clsx';
const url = require('url');
import { connectRobin } from '@simplus/robin-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircleTwoTone, SettingsApplicationsTwoTone, PowerSettingsNewTwoTone } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cookies from 'universal-cookie';
import { Divider, ListItemAvatar, ListItemText, Avatar, ListItemIcon } from '@material-ui/core';
import { robins } from '../../robins';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';

const { SimplusAuthRobin } = robins;
const cookies = new Cookies();
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
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		inline: {
			display: 'inline',
		},
	}),
);

/**
 * Header Component
 */
@connectRobin([SimplusAuthRobin])
const Header = ({...props}) => {
	const { path } = url.parse(window.location.href);
	const activeTab = (path as '').split('/')[2];
	const classes = useStyles();
	const { handleDrawerOpen, drawerOpen, userInfo  } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);


	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	const handleLogout = () => {
		cookies.remove('token', { path: '/' });
		SimplusAuthRobin.when(SimplusAuthRobin.get('logout', `/auth/logout`)).then(() => {
			window.location.reload();
		}).catch(_err => {
			window.location.reload();
		})
	}

	const handleMenuItemClick = (redirectTo) => {
		handleClose()
		props.history.push(redirectTo);
	}

	return (<ErrorBoundary>
		<AppBar
			color='secondary'
			position='fixed'
			className={clsx(classes.appBar, {
				[classes.appBarShift]: drawerOpen,
			})}
		>
			<Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<IconButton
						color='inherit'
						aria-label='Open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
						[classes.hide]: drawerOpen,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						{activeTab.toUpperCase()}
					</Typography>
				</div>
				<div>
					<IconButton
						aria-label='Account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleMenu}
						color='inherit'
					>
						<AccountCircleTwoTone />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={() => handleMenuItemClick(`/admin/profile/${userInfo ? userInfo.id : undefined}`)}>
								<ListItemAvatar>
									<Avatar
										alt={userInfo ? userInfo.name : 'admin name'}
										src={(userInfo && userInfo.picture_url) ? userInfo.picture_url : 'https://i.ibb.co/2kcsxxB/avatar.png'}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={userInfo ? userInfo.name : ''}
									secondary={
									<React.Fragment>
										View profile
									</React.Fragment>
									}
								/>
						</MenuItem>
						<Divider light={true} />
						<MenuItem onClick={() => handleMenuItemClick(`/admin/profile/${userInfo ? userInfo.id : undefined}/settings`)}>
							<ListItemIcon>
								<SettingsApplicationsTwoTone />
							</ListItemIcon>
							<ListItemText primary='Account Settings' />
						</MenuItem>
						<Divider light={true} />
						<MenuItem onClick={handleLogout}>
							<ListItemIcon>
								<PowerSettingsNewTwoTone />
							</ListItemIcon>
							<ListItemText primary='Logout' />
						</MenuItem>
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	</ErrorBoundary>
	);
}

export default Header;