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
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	List,
	Toolbar,
	IconButton
} from '@material-ui/core';
import { } from '@material-ui/icons';
import { connectRobin } from '@simplus/robin-react';

import { ErrorBoundary } from '../../utils/ErrorBoundary';
import CustomizedSnackbars from '../../components/Toast/Toast';
import { robins } from '../../robins';
const { SimplusAuthRobin } = robins;


interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

interface ProjectState {
	'id': string,
	'name': string
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
const ProjectDetails = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [Project, setProject] = React.useState<ProjectState>({
		id: '',
		name: ''
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

	const handleFormChange = (prop: keyof ProjectState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setProject({ ...Project, [prop]: event.target.value });
	};


	const projectId: (string | null) = (props.match && props.match.params.projectId) ? props.match.params.projectId : null;

	const submitProjectSettings = (event: React.FormEvent) => {
		event.preventDefault();
		SimplusAuthRobin.when(SimplusAuthRobin.put('updatedProjectInfo', `/projects/${projectId}`, {
			name: Project.name,
		})).then(() => {
			SimplusAuthRobin.getResult('updatedProjectInfo');
			handleToastOpen('success', 'Project settings updated successfully!');
		}).catch(err => {
			handleToastOpen('error', 'Project settings failed to update!')
		})
	}

	const handleBackClick = () => {
		props.history.goBack();
	}

	const getProjectInfo = (projectId: (string | null)) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('projectInfo', `/projects/${projectId}`)).then(() => {
			const projectInfo = SimplusAuthRobin.getResult('projectInfo').data[0];
			setProject({
				...Project,
				name: projectInfo.name ? projectInfo.name : '',
				id: projectInfo.id ? projectInfo.id : '',
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	useEffect(() => {
		getProjectInfo(projectId)
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
		<Grid container>
			<List className={classes.root}>
				<Toolbar variant='dense'>
					<IconButton edge='start' onClick={handleBackClick} className={classes.backArrowButton} color='inherit' aria-label='menu'>
						<ArrowBackTwoTone />
					</IconButton>
					<Typography variant='h6' color='inherit'>
						Back to Projects
					</Typography>
				</Toolbar>
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar alt='Remy Sharp' src='/src/assets/img/login-banner.jpeg' />
					</ListItemAvatar>
					<ListItemText
						primary={<Typography variant='h6' style={{ marginRight: '10px' }}>{Project.name}</Typography>}
						secondary={
							<React.Fragment>
								{Project.id}
							</React.Fragment>
						}
					/>
				</ListItem>
			</List>
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
				<Tab label='Settings' {...a11yProps(0)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<form className={classes.form} autoComplete='off' onSubmit={submitProjectSettings}>
					<TextField
						variant='filled'
						margin='normal'
						required
						fullWidth
						id='projectName'
						label='Project Name'
						name='projectName'
						value={Project.name}
						autoComplete='Project Name'
						autoFocus
						onChange={handleFormChange('name')}
					/>
					<div style={{float: 'right'}}>
						<Button
							variant='contained'
							size='medium'
							className={classes.submit}
							color='default'
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

export default ProjectDetails;