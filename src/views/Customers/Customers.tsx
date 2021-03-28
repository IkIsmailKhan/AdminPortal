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

interface CustomerState {
	'id': string,
	'name': string,
	'project_id': string,
	'project_name': string,
	'created_by': string,
	'created_by_name': string
}

interface CustomerListState {
	customers: CustomerState[];
}

interface ProjectListState {
	projects: any[];
}

interface CustomerFieldsState {
	fields: [];
}

let addCustomerFields: any[] = [];

@connectRobin([SimplusAuthRobin])
const Customers = (props) => {
	const classes = useStyles();
	const getLoggedInUser = () => {
		return SimplusAuthRobin.getResult('loggedInUserInfo');
	}
	const loggedInUser = getLoggedInUser();
	const [selectCustomer, setSelectCustomer] = React.useState(null);
	const loggedInUserId = loggedInUser ? loggedInUser.data.id : null;
	const [loading, setLoading] = React.useState(true);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [newCustomer, setNewCustomer] = React.useState<any>({});
	const [customerList, setCustomerList] = React.useState<CustomerListState>({
		customers: []
	});
	const [customerFields, setCustomerFields] = React.useState<CustomerFieldsState>({
		fields: []
	});
	const [projectList, setProjectList] = React.useState<ProjectListState>({
		projects: []
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
		createCustomerForm()
	};

	const handleModalClose = () => {
		setNewCustomer({})
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

	const menuConfirmHandleClickOpen = (customerId) => {
		setSelectCustomer(customerId)
		menuConfirmSetOpen(true);
	};

	const menuConfirmHandleClose = () => {
		setSelectCustomer(null)
		menuConfirmSetOpen(false);
	};

	const handleCreateCustomerForm = (prop: {}) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log(newCustomer.name)
		setNewCustomer(prevState => ({ ...prevState, [name]: value }));
		// setNewCustomer({ ...newCustomer, [prop]: event.target.value });
	};

	const deleteCustomer = (customerId) => {
		if (!customerId) {
			handleToastOpen('warning', 'Customer id missing!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.delete('deleteCustomer', `/customers/${customerId}`)).then(() => {
				handleToastOpen('success', 'Customer deleted successfully!');
				menuConfirmHandleClose()
				fetchCustomers()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const onSelectDeleteMenu = () => {
		menuHandleClose()
		if (!selectCustomer) {
			handleToastOpen('warning', 'Customerid missing!')
		} else {
			deleteCustomer(selectCustomer)
		}
	}

	const fetchCustomers = () => {
		setLoading(true);
		SimplusAuthRobin.when(SimplusAuthRobin.get('customerList', `/customers`)).then(() => {
			setLoading(false);
			const customerList = SimplusAuthRobin.getResult('customerList').data;
			if (customerList.length) {
				const customerDataMapping = customerList.map((customer: any) => {
					return {
						'id': customer.id,
						'name': customer.name,
						'project_id': customer.project_id,
						'project_name': customer.project_name,
						'created_by': customer.created_by,
						'created_by_name': customer.created_by_name
					}
				})
				setCustomerList({
					...customerList,
					customers: customerDataMapping
				})
			}
		}).catch(err => {
			setLoading(false);
			handleToastOpen('error', err.response.data.message)
		})
	}

	const fetchProjects = () => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('projectList', `/projects`)).then(() => {
			const projects = SimplusAuthRobin.getResult('projectList').data;
			if (projects.length) {
				const projectDataMapping = projects.map((proj: any) => {
					return {
						'id': proj.id,
						'name': proj.name,
					}
				})
				setProjectList({
					...projectList,
					projects: projectDataMapping
				})
			}
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const fetchCustomerFields = () => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('customerFields', `/customers/schema/fields`)).then(() => {
			const customerField = SimplusAuthRobin.getResult('customerFields').data;
			if (customerField.length) {
				const customerFieldsDataMapping = customerField.map((customer: any) => {
					return {
						"column_name": customer.column_name,
						"is_nullable": customer.is_nullable,
						"data_type": customer.data_type,
						"visible_text": customer.column_name.split('_').join(' ')
					}
				})
				setCustomerFields({
					...customerFields,
					fields: customerFieldsDataMapping
				})
			}
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}

	const createCustomerForm = () => {
		addCustomerFields = []
		customerFields.fields.forEach((customer: any, index) => {
			addCustomerFields.push(<TextField
				variant='filled'
				margin='normal'
				required={customer!.column_name == 'name' ? true : false}
				fullWidth
				key={index}
				id={customer!.column_name}
				label={customer!.visible_text}
				name={customer!.column_name}
				onChange={handleCreateCustomerForm(customer!.column_name)}
			/>)
		})
		addCustomerFields.push(<TextField
			id='project'
			required
			key={customerFields.fields.length + 1}
			select
			label='Select Project'
			fullWidth
			name={'project_id'}
			value={Object.keys(newCustomer).length > 0 ? newCustomer!.project_id : ''}
			onChange={handleCreateCustomerForm('project_id')}
			margin='normal'
			variant='filled'
		>
			{
				projectList.projects.map((val: any, index) => <MenuItem key={index} value={val.id}>
						{val.name}
					</MenuItem>)
			}
		</TextField>)
	}

	const submitNewCustomer = () => {
		console.log(newCustomer)
		if (!newCustomer!.name || !newCustomer!.project_id) {
			handleToastOpen('warning', 'Name and project selection is required!')
		} else {
			SimplusAuthRobin.when(SimplusAuthRobin.post('createCustomer', `/customers`, {
				...newCustomer,
				created_by: loggedInUserId
			})).then(() => {
				handleToastOpen('success', 'New customer added successfully. You can see details in settings!');
				handleModalClose()
				setNewCustomer({});
				fetchCustomers()
			}).catch(err => {
				handleToastOpen('error', err.response.data.message)
			})
		}
	}

	const createCustomerFields = addCustomerFields;

	const handleViewClick = (redirectTo) => {
		props.history.push(redirectTo);
	}


	useEffect(() => {
		fetchCustomers()
		fetchCustomerFields()
		fetchProjects()
	}, [])

	return (<ErrorBoundary>
		<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose} />
		<ModalComponent subHeading={'You can update your information later in the customer details view.'}  open={modalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} heading='Add New Customer' formFields={createCustomerFields} submit={submitNewCustomer} />
		<ConfirmModalComponent  open={menuConfirmOpen} handleClose={menuConfirmHandleClose} heading='Confirmation' submit={onSelectDeleteMenu} />
		<Grid container spacing={5}>
			<Grid item xs>
				<Typography variant='h5' display='block' gutterBottom={true}>
					Customers
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
					Add Customer
				</Button>
			</Grid>
		</Grid>
		<Grid container>
			{
				customerList.customers.length ?
				<List className={classes.root}>
					{
						loading ? <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><CircularProgress className={classes.progress} /></div> :
						customerList.customers.map((customer, index) => {
							return [
								<ListItem alignItems='flex-start' key={index}>
									<ListItemAvatar>
										<Avatar alt={customer.name} src={'/src/assets/img/simplus-logo.png'} />
									</ListItemAvatar>
									<ListItemText
										style={{ width: '50%'}}
										primary={
											<Link href={`/admin/customers/${customer.id}/details`} color={'textPrimary'} underline={'none'}>
												{customer.name}
											</Link>
										}
										secondary={
											<React.Fragment>
												<b>Created By:</b> {customer.created_by_name}
											</React.Fragment>
										}
									/>
									<ListItemText
										style={{ width: '50%'}}
										primary='Project'
										secondary={
											<React.Fragment>
												{
													customer.project_name
												}
											</React.Fragment>
										}
									/>
									<ListItemSecondaryAction>
										<Menu
											id={`simple-menu-${customer.id}`}
											anchorEl={menuAnchorEl.item}
											keepMounted
											open={Boolean(menuAnchorEl) && menuAnchorEl.index === index}
											onClose={menuHandleClose}
										>
											<MenuItem onClick={() => handleViewClick(`/admin/customers/${customer.id  ? customer.id : null }/details`)}>View</MenuItem>
											<MenuItem onClick= {() => menuConfirmHandleClickOpen(customer.id)}>Delete</MenuItem>
										</Menu>
										<IconButton edge='end' aria-label='delete' aria-controls={`simple-menu-${customer.id}`} aria-haspopup='true' onClick={menuHandleClick(index)}>
											<MoreVertTwoTone />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>,
								customerList.customers.length - 1 !== index ? <Divider key={`div-${index}`} variant='inset' component='li' /> : null
								]
						})
					}
				</List>
				:
				<div>There are no customers yet.</div>
			}
		</Grid>
	</ErrorBoundary>);
};

export default Customers;