import React, { useEffect, SyntheticEvent } from 'react';
import {
	makeStyles,
	Theme,
	Paper,
	Typography,
	Grid,
	Avatar
} from '@material-ui/core';
import { connectRobin } from '@simplus/robin-react';

import { robins } from '../../robins';
import CustomizedSnackbars from 'src/components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';
const { SimplusAuthRobin } = robins;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(3, 2),
	},
	bigAvatar: {
		margin: 10,
		width: 150,
		height: 150,
	},
}))

interface OrganizationState {
	name: string,
	type: string,
	address: string,
	contactNo: string,
	owner:  string,
	pictureUrl: string
}

@connectRobin([SimplusAuthRobin])
const OrganizationProfile = (props) => {
	const classes = useStyles();
	const [notification, setNotification] = React.useState({
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});
	const [organization, setOrganization] = React.useState<OrganizationState>({
		name: '',
		type: '',
		address: '',
		contactNo: '',
		owner:  '',
		pictureUrl: ''
	});

	const organizationId = (props.match && props.match.params.organizationId) ? props.match.params.organizationId : undefined;

	const handleToastClose = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setNotification({...notification, toastOpen: false, toastMessage: undefined});
	}

	const handleToastOpen = (toastVariant, toastMessage) => {
		setNotification({...notification, toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage});
	}

	useEffect(() => {
		SimplusAuthRobin.when(SimplusAuthRobin.get('organizationInfo', `/organization/${organizationId}`)).then(() => {
			const organizationInfo = SimplusAuthRobin.getResult('organizationInfo').data[0];
			setOrganization({
				...organization,
				name: organizationInfo.name,
				type: organizationInfo.type,
				address: organizationInfo.address,
				contactNo: organizationInfo.contact_no,
				owner:  organizationInfo.owner,
				pictureUrl: ''
			})
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
		})
	}, [])

	return (
		<ErrorBoundary>
			<Grid container direction='column'>
				<CustomizedSnackbars open={notification.toastOpen} variant={notification.toastVariant} message={notification.toastMessage} handleToastClose={handleToastClose}/>
				<Grid item xs>
					<Typography variant='h5' display='block' gutterBottom={true}>
						Organization Profile
					</Typography>
				</Grid>
				<Grid item xs>
					<Paper className={classes.root}>
						<Grid container>
							<Grid item xs={12} sm={12} md={4} lg={4}>
								<Avatar
									alt={organization.name ? organization.name : 'simplus-logo'}
									src={organization.pictureUrl ? organization.pictureUrl : '/src/assets/img/simplus-logo.png'}
									className={classes.bigAvatar}/>
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={8}>
								<Grid container>
									<Grid item xs>
										<Grid container direction='column' justify='center' spacing={3}>
											<Grid item xs>
												<Typography variant='caption'>NAME</Typography>
												<Typography variant='h6'>{organization.name ? organization.name : '' }</Typography>
											</Grid>
											<Grid item xs>
												<Typography variant='caption'>ADDRESS</Typography>
												<Typography variant='h6'>{organization.address ? organization.address : '' }</Typography>
											</Grid>
											<Grid item xs>
												<Typography variant='caption'>CONTACT NO</Typography>
												<Typography variant='h6'>{organization.contactNo ? organization.contactNo : '' }</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs style={{display: 'flex'}}>
										<Grid container direction='column' justify='space-between' style={{flexGrow: 1}}>
											<Grid item xs>
												<Typography variant='caption'>TYPE</Typography>
												<Typography variant='h6'>{organization.type ? organization.type : '' }</Typography>
											</Grid>
											<Grid item xs style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
												<Typography variant='caption'>OWNER</Typography>
												<Typography variant='h6'>{organization.owner ? organization.owner : '' }</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</ErrorBoundary>
	)
};

export default OrganizationProfile;