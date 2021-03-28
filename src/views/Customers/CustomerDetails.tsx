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

interface CustomerFieldsState {
	fields: [];
}

@connectRobin([SimplusAuthRobin])
const CustomerDetails = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [progress, setProgress] = React.useState('none');
	const [customer, setCustomer] = React.useState<any>({});
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
    });
    const [customerFields, setCustomerFields] = React.useState<CustomerFieldsState>({
		fields: []
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

	const handleFormChange = (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setCustomer({ ...customer, [prop]: event.target.value });
	};

	const handleBackClick = () => {
		props.history.goBack();
	}

	const customerId = (props.match && props.match.params.customerId) ? props.match.params.customerId : undefined;

	const getCustomerInfo = (id) => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('customerInfo', `/customers/${id}`)).then(() => {
            const userInfo = SimplusAuthRobin.getResult('customerInfo').data[0];
            setCustomer({
				...customer,
				...userInfo
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}


	const submitCustomerSettings = (event: React.FormEvent) => {
        event.preventDefault();
        let { id, created_at, updated_at, deleted_at, project_id, updated_by, created_by, ...info} = customer;
        console.log(info)
		setProgress('block');
		SimplusAuthRobin.when(SimplusAuthRobin.put('updateCustomerInfo', `/customers/${customerId}`, {
			...info
		})).then(() => {
			const updatedInfo = SimplusAuthRobin.getResult('updateCustomerInfo');
			handleToastOpen('success', updatedInfo.message);
			setProgress('none');
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
			setProgress('none');
		})
	}

	const onCancel = () => {
		getCustomerInfo(customerId)
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

	useEffect(() => {
        getCustomerInfo(customerId)
        fetchCustomerFields()
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
						<Avatar alt={customer.name} src={'/src/assets/img/simplus-logo.png'} />
					</ListItemAvatar>
					<ListItemText
						primary={<Typography variant='h6' style={{ marginRight: '10px' }}>{customer.name}</Typography>}
						secondary={
							<React.Fragment>
								{customer.id}
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
				<form className={classes.form} autoComplete='off' onSubmit={submitCustomerSettings}>
                    {
                        customerFields.fields.map((val: any, index) => <TextField
                        variant='filled'
                        required={customer!.column_name == 'name' ? true : false}
						margin='normal'
						fullWidth
						id={val.column_name}
						label={val.visible_text}
						type='text'
						name={val.column_name}
                        value={customer[val.column_name]}
                        onChange={handleFormChange(val.column_name)}
					/>)
                    }
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

export default CustomerDetails;