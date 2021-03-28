import React, { useEffect, SyntheticEvent } from 'react';
import clsx from 'clsx';
import { SaveTwoTone, ArrowBackTwoTone } from '@material-ui/icons';
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
	Toolbar,
	IconButton,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	LinearProgress,
	Hidden
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

interface UserProfileState {
	name: string;
	pictureUrl: string;
	email: string;
	id: string;
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
		backgroundColor: theme.palette.background.paper,
	},
	backArrowButton: {
		marginRight: theme.spacing(2),
	},
}))

@connectRobin([SimplusAuthRobin])
const UserDetails = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [progress, setProgress] = React.useState('none');
	const [userProfile, setUserProfile] = React.useState<UserProfileState>({
		name: '',
		pictureUrl: '',
		email: '',
		id: ''
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

	const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	}

	const handleFormChange = (prop: keyof UserProfileState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserProfile({ ...userProfile, [prop]: event.target.value });
	};

	const handleBackClick = () => {
		props.history.goBack();
	}

	const userId = (props.match && props.match.params.userId) ? props.match.params.userId : undefined;

	const getUserInfo = (id) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('userInfo', `/users/${id}`)).then(() => {
			const userInfo = SimplusAuthRobin.getResult('userInfo').data;
			setUserProfile({
				...userProfile,
				name: userInfo.name,
				pictureUrl: userInfo.picture_url ? userInfo.picture_url : '',
				id: userInfo.id,
				email: userInfo.email
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}


	const submitUserProfileSettings = (event: React.FormEvent) => {
		event.preventDefault();
		setProgress('block');
		SimplusAuthRobin.when(SimplusAuthRobin.put('updateUserInfo', `/users/${userId}`, {
			name: userProfile.name,
			picture_url: userProfile.pictureUrl
		})).then(() => {
			const updatedInfo = SimplusAuthRobin.getResult('updateUserInfo');
			handleToastOpen('success', updatedInfo.message);
			setProgress('none');
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
			setProgress('none');
		})
	}

	const onCancel = () => {
		getUserInfo(userId)
	}

	useEffect(() => {
		getUserInfo(userId)
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
		<Grid container>
			<List className={classes.root}>
				<Toolbar variant='dense'>
					<IconButton onClick={handleBackClick} edge='start' className={classes.backArrowButton} color='inherit' aria-label='menu'>
						<ArrowBackTwoTone />
					</IconButton>
					<Typography variant='h6' color='inherit'>
						Back to Application
					</Typography>
				</Toolbar>
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar alt={userProfile.name} src={userProfile.pictureUrl ? userProfile.pictureUrl : '/src/assets/img/simplus-logo.png'} />
					</ListItemAvatar>
					<ListItemText
						primary={<Typography variant='h6' style={{ marginRight: '10px' }}>{userProfile.name}</Typography>}
						secondary={
							<React.Fragment>
								{userProfile.id}
							</React.Fragment>
						}
					/>
				</ListItem>
			</List>
		</Grid>
		<LinearProgress color='primary' style={{ display: progress}}/>
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
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<form className={classes.form} autoComplete='off' onSubmit={submitUserProfileSettings}>
					<TextField
						variant='filled'
						margin='normal'
						fullWidth
						id='email'
						label='Email'
						type='email'
						name='email'
						value={userProfile.email}
						autoComplete='email'
						autoFocus
					/>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						id='name'
						label='Name'
						type='name'
						name='name'
						value={userProfile.name}
						autoComplete='name'
						autoFocus
						onChange={handleFormChange('name')}
					/>
					<TextField
						variant='filled'
						margin='normal'
						fullWidth
						id='pictureUrl'
						label='pictureUrl'
						type='text'
						value={userProfile.pictureUrl}
						name='pictureUrl'
						autoComplete='pictureUrl'
						autoFocus
						onChange={handleFormChange('pictureUrl')}
					/>
					<div style={{float: 'right'}}>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='default'
							onClick={onCancel}
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
		</Grid>
	</ErrorBoundary>);
};

export default UserDetails;