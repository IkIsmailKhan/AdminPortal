import React, { useEffect } from 'react';
import clsx from 'clsx';
import { SaveTwoTone, MoreVertTwoTone } from '@material-ui/icons';
import {
	makeStyles,
	Theme,
	Grid,
	Typography,
	Box,
	AppBar,
	Tabs,
	Tab,
	TextField,
	Button,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction,
	Menu,
	MenuItem,
	IconButton,
	Chip
} from '@material-ui/core';
import { } from '@material-ui/icons';
import { connectRobin } from '@simplus/robin-react';

import { robins } from '../../robins';
import CustomizedSnackbars from 'src/components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
const { SimplusAuthRobin } = robins;


interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

interface OrganizationState {
	name: string;
	address: string;
	type: string;
	contactNo: string;
}

interface ThemeState {
	logoUrl: string;
	authContainerBackgroundColor: string;
	pageBackgroundColor: string;
	fontColor: string;
}

interface InviteeState {
	organization_id: string;
	invitor_id: string;
	invitor_name: string;
	invitee_id: string;
	status: string;
	invitee_name: string;
	invitee_email: string;
}

interface InviteeListState {
	inviteeList: InviteeState[];
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
	<Typography
		style={{ flexGrow: 1 }}
		component='div'
		role='tabpanel'
		hidden={value !== index}
		id={`scrollable-auto-tabpanel-${index}`}
		aria-labelledby={`scrollable-auto-tab-${index}`}
		{...other}
	>
		<Box p={3}>{children}</Box>
	</Typography>
	);
}

const a11yProps = (index: any) => {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme: Theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2, 2),
	},
	leftIcon: {
		marginRight: theme.spacing(1),
	},
	iconSmall: {
		fontSize: 20,
	},
	root: {
		width: '100%',
		backgroundColor:  '#f5f5f5',
	},
	inline: {
		display: 'inline'
	},
	chip: {
		margin: theme.spacing(1),
	},
}))

@connectRobin([SimplusAuthRobin])
const OrganizationSettings = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [orgProfile, setOrgProfile] = React.useState<OrganizationState>({
		name: '',
		address: '',
		type: '',
		contactNo: '',
	});
	const [themeSetting, setThemeSetting] = React.useState<ThemeState>({
		logoUrl: '',
		authContainerBackgroundColor: '',
		pageBackgroundColor: '',
		fontColor: '',
	});
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [menuAnchorEl, menuSetAnchorEl] = React.useState({ item: null, index: null });
	const [invitee, setInvitee] = React.useState<InviteeListState>({
		inviteeList : [
			{
				organization_id: '',
				invitor_id: '',
				invitor_name: '',
				invitee_id: '',
				status: '',
				invitee_name: '',
				invitee_email: ''
			}
		]
	});

	const handleToastClose = (_event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setNotification({...notification, toastOpen: false, toastMessage: undefined});
	}

	const handleToastOpen = (toastVariant, toastMessage) => {
		setNotification({...notification, toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage});
	}

	const menuHandleClick = i => event => {
		menuSetAnchorEl({...menuAnchorEl, item: event.currentTarget, index: i });
	};
	const menuHandleClose = () => {
		menuSetAnchorEl({...menuAnchorEl, item: null, index: null  });
	};

	const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	}


	const handleFormChange = (prop: keyof OrganizationState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setOrgProfile({ ...orgProfile, [prop]: event.target.value });
	};

	const handleThemeFormChange = (prop: keyof ThemeState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setThemeSetting({ ...themeSetting, [prop]: event.target.value });
	};

	const organizationId = (props.match && props.match.params.organizationId) ? props.match.params.organizationId : undefined;

	const submitOrganizationProfile = (event: React.FormEvent) => {
		event.preventDefault();
		SimplusAuthRobin.when(SimplusAuthRobin.put('updateOrganizationProfile', `/organization/${organizationId}`, {
			name: orgProfile.name,
			address: orgProfile.address,
			type: orgProfile.type,
			contact_no: orgProfile.contactNo,
		})).then(() => {
			const updatedInfo = SimplusAuthRobin.getResult('updateOrganizationProfile');
			handleToastOpen('success', updatedInfo.message);
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const submitThemeSettings = (event: React.FormEvent) => {
		event.preventDefault();
		SimplusAuthRobin.when(SimplusAuthRobin.put('updateOrganizationThemeSettings', `/organization/${organizationId}/theme_settings`, {
			logo_url: themeSetting.logoUrl,
			login_background_color: themeSetting.authContainerBackgroundColor,
			page_background_color: themeSetting.pageBackgroundColor,
			font_color: themeSetting.fontColor
		})).then(() => {
			const updatedInfo = SimplusAuthRobin.getResult('updateOrganizationThemeSettings');
			handleToastOpen('success', updatedInfo.message);
		}).catch(err => {
			if (err.response.status === 404) {
				SimplusAuthRobin.when(SimplusAuthRobin.post('createOrganizationThemeSettings', `/organization/${organizationId}/theme_settings`, {
					logo_url: themeSetting.logoUrl,
					login_background_color: themeSetting.authContainerBackgroundColor,
					page_background_color: themeSetting.pageBackgroundColor,
					font_color: themeSetting.fontColor
				})).then(() => {
					const createOrganizationThemeSetting = SimplusAuthRobin.getResult('createOrganizationThemeSettings');
					handleToastOpen('success', createOrganizationThemeSetting.message);
				}).catch(err => {
					handleToastOpen('error', err.response.data.message)
				})
			} else {
				handleToastOpen('error', err.response.data.message)
			}
		})
	}


	const getOrganizationProfile = (id) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('organizationInfo', `/organization/${id}`)).then(() => {
			const organizationInfo = SimplusAuthRobin.getResult('organizationInfo').data[0];
			setOrgProfile({
				...orgProfile,
				name: organizationInfo.name ? organizationInfo.name : '',
				address: organizationInfo.address ? organizationInfo.address : '',
				type: organizationInfo.type ? organizationInfo.type : '',
				contactNo: organizationInfo.contact_no ? organizationInfo.contact_no : ''
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const getOrganizationThemeSettings = (id) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('organizationThemeSettings', `/organization/${id}/theme_settings`)).then(() => {
			const organizationThemeSettings = SimplusAuthRobin.getResult('organizationThemeSettings').data[0];
			setThemeSetting({
				...themeSetting,
				logoUrl: organizationThemeSettings.logo_url ? organizationThemeSettings.logo_url : '',
				authContainerBackgroundColor: organizationThemeSettings.login_background_color ? organizationThemeSettings.login_background_color : '',
				pageBackgroundColor: organizationThemeSettings.page_background_color ? organizationThemeSettings.page_background_color : '',
				fontColor: organizationThemeSettings.font_color ? organizationThemeSettings.font_color : '',
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const getOrganizationInvitees = (id) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('organizationInvitees', `/organization/${id}/invitees`)).then(() => {
			const organizationInvitees = SimplusAuthRobin.getResult('organizationInvitees').data;
			setInvitee({
				...invitee,
				inviteeList: organizationInvitees

			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const menuResendHandleClick = (organizationId, invitorId, inviteeId) => {
		SimplusAuthRobin.when(SimplusAuthRobin.post('resendInvitation', `/organization/${organizationId}/invitees/${inviteeId}/resend`, {
			invitorId: invitorId
		})).then(() => {
			const resendInvitation = SimplusAuthRobin.getResult('resendInvitation');
			handleToastOpen('success', resendInvitation.message);
			getOrganizationInvitees(organizationId)
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const menuDeleteHandleClick = (organizationId, inviteeId) => {
		SimplusAuthRobin.when(SimplusAuthRobin.delete('deleteInvitation', `/organization/${organizationId}/invitees/${inviteeId}`)).then(() => {
			const deleteInvitation = SimplusAuthRobin.getResult('deleteInvitation');
			handleToastOpen('success', deleteInvitation.message);
			getOrganizationInvitees(organizationId)
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const onCancelOrganizationProfile = () => {
		getOrganizationProfile(organizationId)
	}

	const onCancelOrganizationThemeSettings = () => {
		getOrganizationProfile(organizationId)
	}

	useEffect(() => {
		getOrganizationProfile(organizationId);
		getOrganizationThemeSettings(organizationId)
		getOrganizationInvitees(organizationId)
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
		<Grid container>
			<Typography variant='h5' display='block' gutterBottom={true}>
				Organization Settings
			</Typography>
		</Grid>
		<Grid container>
			<AppBar position='static' color='default'>
				<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor='secondary'
				variant='scrollable'
				scrollButtons='auto'
				aria-label='scrollable auto tabs example'
				>
				<Tab label='Profile' {...a11yProps(0)} />
				<Tab label='Theme Settings' {...a11yProps(1)} />
				<Tab label='Invitations' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<form className={classes.form} autoComplete='off' onSubmit={submitOrganizationProfile}>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						id='name'
						label='Name'
						type='name'
						name='name'
						value={orgProfile.name}
						autoComplete='name'
						autoFocus
						onChange={handleFormChange('name')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						fullWidth
						name='address'
						label='Address'
						type='address'
						value={orgProfile.address}
						id='address'
						autoComplete='address'
						onChange={handleFormChange('address')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						fullWidth
						name='type'
						label='Type'
						type='type'
						value={orgProfile.type}
						id='type'
						autoComplete='type'
						onChange={handleFormChange('type')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						fullWidth
						name='contactNo'
						label='Contact No'
						value={orgProfile.contactNo}
						type='type'
						id='contactNo'
						autoComplete='contactNo'
						onChange={handleFormChange('contactNo')}
					/>
					<div style={{float: 'right'}}>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='default'
							onClick={onCancelOrganizationProfile}
						>
							<SaveTwoTone className={clsx(classes.leftIcon, classes.iconSmall)} />
							Cancel
						</Button>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='secondary'
							type='submit'
						>
							<SaveTwoTone className={clsx(classes.leftIcon, classes.iconSmall)} />
							Save
						</Button>
					</div>
				</form>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<form className={classes.form} autoComplete='off' onSubmit={submitThemeSettings}>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						id='logoUrl'
						label='Logo Url'
						type='text'
						name='logoUrl'
						value={themeSetting.logoUrl}
						autoComplete='logoUrl'
						autoFocus
						onChange={handleThemeFormChange('logoUrl')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						name='authContainerBackgroundColor'
						label='Auth Container Bacground Color'
						type='text'
						value={themeSetting.authContainerBackgroundColor}
						id='authContainerBackgroundColor'
						autoComplete='authContainerBackgroundColor'
						onChange={handleThemeFormChange('authContainerBackgroundColor')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						name='pageBackgroundColor'
						label='Page Background Color'
						type='text'
						value={themeSetting.pageBackgroundColor}
						id='pageBackgroundColor'
						autoComplete='pageBackgroundColor'
						onChange={handleThemeFormChange('pageBackgroundColor')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						name='fontColor'
						label='Font Color'
						type='text'
						id='fontColor'
						value={themeSetting.fontColor}
						autoComplete='fontColor'
						onChange={handleThemeFormChange('fontColor')}
					/>
					<div style={{float: 'right'}}>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='default'
							onClick={onCancelOrganizationThemeSettings}
						>
							<SaveTwoTone className={clsx(classes.leftIcon, classes.iconSmall)} />
							Cancel
						</Button>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='secondary'
							type='submit'
						>
							<SaveTwoTone className={clsx(classes.leftIcon, classes.iconSmall)} />
							Save
						</Button>
					</div>
				</form>
			</TabPanel>
			<TabPanel value={value} index={2}>
				{
					invitee.inviteeList.length ?
					<List className={classes.root}>
						{
							invitee.inviteeList.map((invitee, index) => {
								return <div key={index}>
									<ListItem alignItems='flex-start'>
										<ListItemAvatar>
											<Avatar alt='Remy Sharp' src='/src/assets/img/simplus-logo.png' />
										</ListItemAvatar>
										<ListItemText
											primary='Invitee Name'
											secondary={
												<React.Fragment>
													{invitee.invitee_name}
												</React.Fragment>
											}
										/>
										<ListItemText
											primary='Invitee Email'
											secondary={
												<React.Fragment>
													{invitee.invitee_email}
												</React.Fragment>
											}
										/>
										<ListItemText
											primary='Invitor Name'
											secondary={
												<React.Fragment>
													{invitee.invitor_name}
												</React.Fragment>
											}
										/>
										<ListItemText
											primary='Status'
											secondary={
												<Typography component={'div'} variant={'body2'}>
													{
														invitee.status === 'expired' ?
														<Chip style={{ margin: 0 }} color='secondary' size='small' label={invitee.status} className={classes.chip} />
														:
														invitee.status === 'failed' ?
														<Chip style={{ margin: 0, backgroundColor: 'orange' }} size='small' label={invitee.status} className={classes.chip} />
														:
														<Chip style={{ margin: 0, backgroundColor: '#79d479' }} size='small' label={invitee.status} className={classes.chip} />													
													}
												</Typography>
											}
										/>
										<ListItemSecondaryAction>
											<Menu
												id='simple-menu'
												anchorEl={menuAnchorEl.item}
												keepMounted
												open={Boolean(menuAnchorEl) && menuAnchorEl.index === index}
												onClose={menuHandleClose}
											>
												<MenuItem onClick={() => menuResendHandleClick(invitee.organization_id, invitee.invitor_id, invitee.invitee_id)}>Resend</MenuItem>
												<MenuItem
													disabled={ invitee.status === 'expired' || invitee.status === 'failed' ? false : true }
													onClick={() => menuDeleteHandleClick(invitee.organization_id, invitee.invitee_id)}
												>
													Delete
												</MenuItem>
											</Menu>
											<IconButton edge='end' aria-label='delete' aria-controls='simple-menu' aria-haspopup='true' onClick={menuHandleClick(index)}>
												<MoreVertTwoTone />
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
								</div>
							})
						}
					</List>
					:
					<div>There is no invitation to organization</div>
				}
			</TabPanel>
		</Grid>
	</ErrorBoundary>);
};

export default OrganizationSettings;