import React, { SyntheticEvent, useEffect } from 'react';
import {
	makeStyles,
	Theme,
	Grid,
	Typography,
	Button,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Divider,
	ListItemSecondaryAction,
	IconButton,
	Menu,
	MenuItem,
    TextField,
    Chip
} from '@material-ui/core';
import { CreateTwoTone, MoreVertTwoTone, CheckCircleTwoTone } from '@material-ui/icons';
import { connectRobin } from '@simplus/robin-react';
import ModalComponent from '../../components/Modal/Modal'

import ConfirmModalComponent from '../../components/ConfirmModal/ConfirmModal'
import { robins } from '../../robins';
import clsx from 'clsx';
import CustomizedSnackbars from '../../components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
const { SimplusAuthRobin } = robins;

const useStyles = makeStyles((theme: Theme) => ({
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
		backgroundColor: '#f5f5f5',
	},
	inline: {
		display: 'inline',
    },
    chip: {
		margin: theme.spacing(1),
	},
}))

interface OrganizationState {
	id: string,
	name: string,
	type: string,
	selected: boolean,
    logo_url: string,
    contact_no: string;
    address: string;
}

interface OrganizationListState {
	organizations: OrganizationState[];
}

interface NewOrganization {
	name: string;
    type: string;
	address: string;
	contact_no: string;
}

@connectRobin([SimplusAuthRobin])
const SwitchOrganization = (props) => {
	const classes = useStyles();
	const getLoggedInUser = () => {
		return SimplusAuthRobin.getResult('loggedInUserInfo');
	}
	const loggedInUser = getLoggedInUser();
	const [selectOrganization, setSelectOrganization] = React.useState(null);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [newOrganization, setNewOrganization] = React.useState<NewOrganization>({
		name: '',
		type: '',
        address: '',
        contact_no: '',
	});
	const [organizationList, setOrganizationList] = React.useState<OrganizationListState>({
		organizations: []
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

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const [menuAnchorEl, menuSetAnchorEl] = React.useState({ item: null, index: null });

	const menuHandleClick = i => event => {
		menuSetAnchorEl({...menuAnchorEl, item: event.currentTarget, index: i });
	};
	const menuHandleClose = () => {
		menuSetAnchorEl({...menuAnchorEl, item: null, index: null });
	};

    const [menuConfirmOpen, menuConfirmSetOpen] = React.useState(false);
    const [menuSelectConfirmOpen, menuSelectConfirmSetOpen] = React.useState(false);

	const menuConfirmHandleClickOpen = (orgId) => {
		setSelectOrganization(orgId)
		menuConfirmSetOpen(true);
    };

	const menuConfirmHandleClose = () => {
		setSelectOrganization(null)
		menuConfirmSetOpen(false);
    };
    
    const menuSelectConfirmHandleClickOpen = (orgId) => {
		console.log(orgId)
		setSelectOrganization(orgId)
		menuSelectConfirmSetOpen(true);
    };

    const menuSelectConfirmHandleClose = () => {
		setSelectOrganization(null)
		menuSelectConfirmSetOpen(false);
	};

	const handleCreateAppForm = (prop: keyof NewOrganization) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewOrganization({ ...newOrganization, [prop]: event.target.value });
	};

	const deleteOrg = (orgId) => {
		if (!orgId) {
			handleToastOpen('warning', 'Org id missing!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.delete('deleteOrg', `/organization/${orgId}`)).then(() => {
				handleToastOpen('success', 'Organization deleted successfully!');
				menuConfirmHandleClose()
				fetchOrganizations()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
    }
    
    const switchOrganization = (orgId) => {
        if (!orgId) {
			handleToastOpen('warning', 'Org id missing!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.put('switchOrg', `/organization/${orgId}`, {
				by_default: true
			})).then(() => {
				handleToastOpen('success', 'Organization updated successfully!');
				menuSelectConfirmHandleClose()
				fetchOrganizations()
				location.reload();
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
    }

	const onSelectDeleteMenu = () => {
		menuHandleClose()
		if (!selectOrganization) {
			handleToastOpen('warning', 'Organization id missing!')
		} else {
			deleteOrg(selectOrganization)
		}
    }
    
    const onSelectOrganizationMenu = () => {
        menuHandleClose()
		if (!selectOrganization) {
			handleToastOpen('warning', 'Organization id missing!')
		} else {
			switchOrganization(selectOrganization)
		}
    }

	const fetchOrganizations = () => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('orgList', `/organization`)).then(() => {
			const organizations = SimplusAuthRobin.getResult('orgList').data;
			if (organizations.length) {
				const orgDataMapping = organizations.map((org) => {
					return {
						id: org.id,
                        name: org.name,
                        type: org.type,
                        selected: org.by_default,
                        logo_url: '',
                        contact_no: org.contact_no,
                        address: org.address
					}
				})
				setOrganizationList({
					...organizationList,
					organizations: orgDataMapping
				})
			}
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const submitNewOrg = () => {
		if (!newOrganization.name) {
			handleToastOpen('warning', 'Name is required!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.post('createOrg', `/organization`, {
				'name': newOrganization.name,
                'type': newOrganization.type ? newOrganization.type : null,
                'address': newOrganization.address ? newOrganization.address : null,
                'contact_no': newOrganization.contact_no ? newOrganization.contact_no : null,
			})).then(() => {
				handleToastOpen('success', 'New organization added. You can see details in organization settings!');
				handleModalClose()
				setNewOrganization({ name: '', type: '', address: '', contact_no: ''});
				fetchOrganizations()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const createOrganizationFields = ([
		<TextField
			variant='filled'
			margin='normal'
			required
			fullWidth
			key={1}
			id='name'
			label='Full Name'
			name='name'
			autoComplete='Organization Name'
			onChange={handleCreateAppForm('name')}
			autoFocus
		/>,
		<TextField
			variant='filled'
			margin='normal'
			fullWidth
			key={2}
			id='type'
			label='Type'
			name='type'
			autoComplete='type'
			onChange={handleCreateAppForm('type')}
			autoFocus
        />,
        <TextField
			variant='filled'
			margin='normal'
			fullWidth
			key={3}
			id='address'
			label='Address'
			name='address'
			autoComplete='address'
			onChange={handleCreateAppForm('address')}
			autoFocus
        />,
        <TextField
			variant='filled'
			margin='normal'
			fullWidth
			key={4}
			id='contact_no'
			label='Contact No'
			name='contact_no'
			autoComplete='contact_no'
			onChange={handleCreateAppForm('contact_no')}
			autoFocus
		/>
    ])

	const handleViewClick = (redirectTo) => {
		props.history.push(redirectTo);
	}


	useEffect(() => {
		fetchOrganizations()
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose} />
		<ModalComponent subHeading={'You can update your information later in the organization details view.'}  open={modalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} heading='Add New Organization' formFields={createOrganizationFields} submit={submitNewOrg} />
		<ConfirmModalComponent  open={menuConfirmOpen} handleClose={menuConfirmHandleClose} heading='Confirmation' submit={onSelectDeleteMenu} />
        <ConfirmModalComponent subHeading={'Are you sure you want to switch to this organization.'}  open={menuSelectConfirmOpen} handleClose={menuSelectConfirmHandleClose} heading='Confirmation' submit={onSelectOrganizationMenu} />
		<Grid container spacing={5}>
			<Grid item xs>
				<Typography variant='h5' display='block' gutterBottom={true}>
					Organizations
				</Typography>
			</Grid>
			<Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					variant='contained'
					size='medium'
					className={classes.submit}
					color='secondary'
					type='submit'
					onClick={handleModalOpen}
				>
					<CreateTwoTone className={clsx(classes.leftIcon, classes.iconSmall)} />
					Create Organization
				</Button>
			</Grid>
		</Grid>
		<Grid container>
			{
				organizationList.organizations.length ?
				<List className={classes.root}>
					{
						organizationList.organizations.map((org, index) => {
							return [
								<ListItem alignItems='flex-start' key={index}>
									<ListItemAvatar>
										<Avatar alt={org.name} src={org.logo_url ? org.logo_url : '/src/assets/img/simplus-logo.png'} />
									</ListItemAvatar>
									<ListItemText
										primary={<Typography variant='h6' style={{ marginRight: '10px' }}>{org.name}</Typography>}
										secondary={
											<React.Fragment>
												{org.type}
											</React.Fragment>
										}
									/>
                                    <ListItemText
										primary='Contact #'
										secondary={
											<React.Fragment>
												{
													org.contact_no
												}
											</React.Fragment>
										}
									/>
									<ListItemText
										primary='Selected'
										secondary={
                                            <Typography component={'div'} variant={'body2'}>
                                                {
                                                    org.selected ?
                                                    <Chip style={{ margin: 0, backgroundColor: '#79d479' }} size='small' label={`${org.selected}`} className={classes.chip} />
                                                    :
                                                    <Chip style={{ margin: 0 }} color='secondary' size='small' label={`${org.selected}`} className={classes.chip} />
                                                }
											</Typography>
										}
									/>
									<ListItemSecondaryAction>
										<Menu
											id={`simple-menu-${org.id}`}
											anchorEl={menuAnchorEl.item}
											keepMounted
											open={Boolean(menuAnchorEl) && menuAnchorEl.index === index}
											onClose={menuHandleClose}
										>
											<MenuItem onClick={() => handleViewClick(`/admin/organization/${org.id  ? org.id : null }/settings`)}>View/Update</MenuItem>
                                            <MenuItem onClick={() => menuSelectConfirmHandleClickOpen(org.id)}>Select</MenuItem>
											<MenuItem  disabled onClick={() => menuConfirmHandleClickOpen(org.id)}>Delete</MenuItem>
										</Menu>
										<IconButton edge='end' aria-label='delete' aria-controls={`simple-menu-${org.id}`} aria-haspopup='true' onClick={menuHandleClick(index)}>
											<MoreVertTwoTone />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>,
								organizationList.organizations.length - 1 !== index ? <Divider key={`div-${index}`} variant='inset' component='li' /> : null
							]
						})
					}
				</List>
				:
				<div>There are no organizations.</div>
			}
		</Grid>
	</ErrorBoundary>);
};

export default SwitchOrganization;