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
	CircularProgress,
	Link
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
	progress: {
		margin: theme.spacing(2),
	},
}))

interface UserState {
	'id': string,
	'name': string,
	'email': string,
	'email_verified': boolean,
	'picture_url': string,
	'user_type': string
}

interface UserListState {
	users: UserState[];
}

interface NewUser {
	name: string;
	email: string;
	user_type: string;
	password: string;
}

@connectRobin([SimplusAuthRobin])
const UsersList = (props) => {
	const classes = useStyles();
	const getLoggedInUser = () => {
		return SimplusAuthRobin.getResult('loggedInUserInfo');
	}
	const loggedInUser = getLoggedInUser();
	const [selectUser, setSelectUser] = React.useState(null);
	const loggedInUserId = loggedInUser ? loggedInUser.data.id : null;
	const [loading, setLoading] = React.useState(true);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [newUser, setNewUser] = React.useState<NewUser>({
		name: '',
		email: '',
		user_type: 'app_user',
		password: ''
	});
	const [userList, setUserList] = React.useState<UserListState>({
		users: []
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

	const menuConfirmHandleClickOpen = (userId) => {
		setSelectUser(userId)
		menuConfirmSetOpen(true);
	};

	const menuConfirmHandleClose = () => {
		setSelectUser(null)
		menuConfirmSetOpen(false);
	};

	const handleCreateAppForm = (prop: keyof NewUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewUser({ ...newUser, [prop]: event.target.value });
	};

	const deleteUser = (userId) => {
		if (!userId) {
			handleToastOpen('warning', 'User id missing!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.delete('deleteUser', `/users/${userId}`)).then(() => {
				handleToastOpen('success', 'User deleted successfully!');
				menuConfirmHandleClose()
				fetchUsers()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const onSelectDeleteMenu = () => {
		menuHandleClose()
		if (!selectUser) {
			handleToastOpen('warning', 'User id missing!')
		} else {
			deleteUser(selectUser)
		}
	}

	const fetchUsers = () => {
		setLoading(true);
		SimplusAuthRobin.when(SimplusAuthRobin.get('userList', `/users`)).then(() => {
			setLoading(false);
			const fetchedUsers = SimplusAuthRobin.getResult('userList').data;
			if (fetchedUsers.length) {
				const userDataMapping = fetchedUsers.map((user) => {
					return {
						id: user.id,
						name: user.name,
						email: user.email,
						email_verified: user.email_verified,
						picture_url: user.picture_url,
						user_type: user.user_type
					}
				})
				setUserList({
					...userList,
					users: userDataMapping
				})
			}
		}).catch(err => {
			setLoading(false);
			handleToastOpen('error', err.response.data.message)
		})
	}

	const submitNewUser = () => {
		if (!newUser.name || !newUser.email || !newUser.password) {
			handleToastOpen('warning', 'Name, email and password is required!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.post('createUser', `/users`, {
				name: newUser.name,
				email: newUser.email,
				password: newUser.password,
				user_type: newUser.user_type
			})).then(() => {
				handleToastOpen('success', 'New user added successfully. You can see details in settings!');
				handleModalClose()
				setNewUser({ name: '', email: '', password: '', user_type: 'app_user'});
				fetchUsers()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const createUserFields = ([
		<TextField
			variant='filled'
			margin='normal'
			required
			fullWidth
			key={1}
			id='name'
			label='Full Name'
			name='name'
			autoComplete='User Name'
			onChange={handleCreateAppForm('name')}
			autoFocus
		/>,
		<TextField
			variant='filled'
			margin='normal'
			required
			fullWidth
			key={2}
			type='email'
			id='email'
			label='Email'
			name='email'
			autoComplete='email'
			onChange={handleCreateAppForm('email')}
			autoFocus
		/>,
		<TextField
			variant='filled'
			margin='normal'
			required
			fullWidth
			key={3}
			type='password'
			id='password'
			label='Password'
			name='password'
			autoComplete='password'
			onChange={handleCreateAppForm('password')}
			autoFocus
		/>,
		<TextField
			id='usertype'
			select
			key={4}
			label='Select User Type'
			fullWidth
			value={newUser.user_type}
			onChange={handleCreateAppForm('user_type')}
			margin='normal'
			variant='filled'
		>
			<MenuItem key={0} value={newUser.user_type}>
				App User
			</MenuItem>
			<MenuItem key={1} value={'admin'}>
				Admin User
			</MenuItem>
		</TextField>])

	const handleViewClick = (redirectTo) => {
		props.history.push(redirectTo);
	}


	useEffect(() => {
		fetchUsers()
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose} />
		<ModalComponent subHeading={'You can update your information later in the user details view.'}  open={modalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} heading='Add New User' formFields={createUserFields} submit={submitNewUser} />
		<ConfirmModalComponent  open={menuConfirmOpen} handleClose={menuConfirmHandleClose} heading='Confirmation' submit={onSelectDeleteMenu} />
		<Grid container spacing={5}>
			<Grid item xs>
				<Typography variant='h5' display='block' gutterBottom={true}>
					App Users
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
					Create User
				</Button>
			</Grid>
		</Grid>
		<Grid container>
			{
				userList.users.length ?
				<List className={classes.root}>
					{
						loading ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><CircularProgress className={classes.progress} /></div> :
						userList.users.map((user, index) => {
							return [
								<ListItem alignItems='flex-start' key={index}>
									<ListItemAvatar>
										<Avatar alt={user.name} src={user.picture_url ? user.picture_url : '/src/assets/img/simplus-logo.png'} />
									</ListItemAvatar>
									<ListItemText
										style={{ width: '50%'}}
										primary={
											<Link href={`/admin/users/${user.id}/details`} color={'textPrimary'} underline={'none'}>
												{user.name}
											</Link>
										}
										secondary={
											<React.Fragment>
												{user.email}
											</React.Fragment>
										}
									/>
									<ListItemText
										style={{ width: '50%'}}
										primary='Email Verified'
										secondary={
											<React.Fragment>
												{
													user.email_verified ?
													<CheckCircleTwoTone style={{ color: 'green' }}></CheckCircleTwoTone>
													:
													<CheckCircleTwoTone style={{ color: 'red' }}></CheckCircleTwoTone>
												}
											</React.Fragment>
										}
									/>
									<ListItemSecondaryAction>
										<Menu
											id={`simple-menu-${user.id}`}
											anchorEl={menuAnchorEl.item}
											keepMounted
											open={Boolean(menuAnchorEl) && menuAnchorEl.index === index}
											onClose={menuHandleClose}
										>
											<MenuItem onClick={() => handleViewClick(`/admin/users/${user.id  ? user.id : null }/details`)}>View</MenuItem>
											<MenuItem onClick= {() => menuConfirmHandleClickOpen(user.id)}>Delete</MenuItem>
										</Menu>
										<IconButton edge='end' aria-label='delete' aria-controls={`simple-menu-${user.id}`} aria-haspopup='true' onClick={menuHandleClick(index)}>
											<MoreVertTwoTone />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>,
								userList.users.length - 1 !== index ? <Divider key={`div-${index}`} variant='inset' component='li' /> : null
								]
						})
					}
				</List>
				:
				<div>There are no users in the selected organization.</div>
			}
		</Grid>
	</ErrorBoundary>);
};

export default UsersList;