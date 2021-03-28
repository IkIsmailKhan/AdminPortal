import React, { useEffect, SyntheticEvent } from 'react';
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
	Link,
	CircularProgress
} from '@material-ui/core';
import { CreateTwoTone, MoreVertTwoTone } from '@material-ui/icons';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
import { connectRobin } from '@simplus/robin-react';
import ModalComponent from '../../components/Modal/Modal'

import { robins } from '../../robins';
import clsx from 'clsx';
import ConfirmModalComponent from '../../components/ConfirmModal/ConfirmModal'
import CustomizedSnackbars from 'src/components/Toast/Toast';
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
		backgroundColor:  '#f5f5f5',
	},
	inline: {
		display: 'inline'
	},
	progress: {
		margin: theme.spacing(2),
	},
}))

interface ProjectState {
	'id': string,
	'name': string,
}

interface ProjectListState {
	projectList: ProjectState[];
}

interface NewProject {
	projectName: string;
}

@connectRobin([SimplusAuthRobin])
const ProjectList = (props) => {
	const getLoggedInUser = () => {
		return SimplusAuthRobin.getResult('loggedInUserInfo');
	}
	const loggedInUser = getLoggedInUser();
	const userId = loggedInUser ? loggedInUser.data.id : null;
	const classes = useStyles();
	const [modalOpen, setModalOpen] = React.useState(false);
	const [selectProject, setSelectProject] = React.useState(null);
	const [project, setProject] = React.useState<ProjectListState>({
		projectList : []
	});
	const [newProject, setNewProject] = React.useState<NewProject>({
		projectName: ''
	});
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [loading, setLoading] = React.useState(true);

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

	const menuConfirmHandleClickOpen = (projectId) => {
		setSelectProject(projectId)
		menuConfirmSetOpen(true);
	};

	const menuConfirmHandleClose = () => {
		setSelectProject(null)
		menuConfirmSetOpen(false);
	};

	const fetchProjects = () => {
		setLoading(true);
		SimplusAuthRobin.when(SimplusAuthRobin.get('projectList', `/projects`)).then(() => {
			setLoading(false);
			const fetchedProjects = SimplusAuthRobin.getResult('projectList').data;
			if (fetchedProjects.length) {
				const projectDataMapping = fetchedProjects.map((project) => {
					return {
						'id': project.id,
						'name': project.name
					}
				})
				setProject({
					...project,
					projectList: projectDataMapping
				})
			}
		}).catch(err => {
			setLoading(false);
			handleToastOpen('error', err.response.data.message)
		})
	}

	const handleViewClick = (redirectTo) => {
		props.history.push(redirectTo);
	}

	const handleCreateAppForm = (prop: keyof NewProject) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewProject({ ...newProject, [prop]: event.target.value });
	};

	const submitNewProject = () => {
		if (!newProject.projectName) {
			handleToastOpen('warning', 'Project name is required!')
		} else if (!userId) {
			handleToastOpen('warning', 'Problem in getting user info!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.post('createProject', `/projects`, {
				name: newProject.projectName,
				user_id: userId
			})).then(() => {
				handleToastOpen('success', 'New Project created successfully. You can get details in settings!');
				handleModalClose()
				setNewProject({ projectName: ''});
				fetchProjects()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const deleteProject = (projectId) => {
		if (!projectId) {
			handleToastOpen('warning', 'Project id missing!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.delete('deleteProject', `/projects/${projectId}`)).then(() => {
				handleToastOpen('success', 'Project deleted successfully!');
				menuConfirmHandleClose()
				fetchProjects()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const onSelectDeleteMenu = () => {
		menuHandleClose()
		if (!selectProject) {
			handleToastOpen('warning', 'Project id missing!')
		} else {
			deleteProject(selectProject)
		}
	}

	const createProjectFields = (
		<TextField
			variant='filled'
			margin='normal'
			required
			fullWidth
			id='projectName'
			label='Project Name'
			name='projectName'
			autoComplete='Project Name'
			onChange={handleCreateAppForm('projectName')}
			autoFocus
		/>)

	useEffect(() => {
		fetchProjects()
	}, [])
	return (
	<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
		<ModalComponent subHeading={'You can change the project name later in the project settings.'} open={modalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} heading='Create New Project' formFields={createProjectFields} submit={submitNewProject}/>
		<ConfirmModalComponent open={menuConfirmOpen} handleClose={menuConfirmHandleClose} heading='Confirmation' submit={onSelectDeleteMenu} />
		<Grid container spacing={5}>
			<Grid item xs>
				<Typography variant='h5' display='block' gutterBottom={true}>
					Projects
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
					Create Project
				</Button>
			</Grid>
		</Grid>
		<Grid container>
			{loading ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><CircularProgress className={classes.progress} /></div> :
				project.projectList.length ?
				<List className={classes.root}>
					{
						project.projectList.map((proj, index) => {
							return <div key={index}>
								<ListItem alignItems='flex-start'>
									<ListItemAvatar>
										<Avatar alt='Remy Sharp' src='/src/assets/img/login-banner.jpeg' />
									</ListItemAvatar>
									<ListItemText
										style={{ width: '50%'}}
										primary={'Project Name'}
										secondary={
											<React.Fragment>
												<Link href={`/admin/projects/${proj.id}/details`} color={'textSecondary'} underline={'none'}>
													{proj.name}
												</Link>
											</React.Fragment>
										}
									/>
									<ListItemText
										style={{ width: '50%'}}
										primary='Project Id'
										secondary={
											<React.Fragment>
												{proj.id}
											</React.Fragment>
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
											<MenuItem onClick={() => handleViewClick(`/admin/projects/${proj.id ? proj.id : undefined}/details`)}>View</MenuItem>
											<MenuItem onClick= {() => menuConfirmHandleClickOpen(proj.id)}>Delete</MenuItem>
										</Menu>
										<IconButton edge='end' aria-label='delete' aria-controls='simple-menu' aria-haspopup='true' onClick={menuHandleClick(index)}>
											<MoreVertTwoTone />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
								{ (project.projectList.length - 1) !== index ? <Divider key={`div-${index}`} variant='inset' component='li' /> : null }
							</div>
						})
					}
				</List>
				:
				<div>There is no projects yet</div>
			}
		</Grid>
	</ErrorBoundary>);
};

export default ProjectList;