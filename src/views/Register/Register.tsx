import React, { SyntheticEvent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connectRobin } from '@simplus/robin-react';
import { robins } from '../../robins';
import CustomizedSnackbars from '../../components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';

const { SimplusAuthRobin } = robins;

const MadeWithLove = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Built with love by the '}
			<Link color='inherit' href='https://fourasol.com/'>
				<b>Fourasol</b>
			</Link>
			{' team.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(/src/assets/img/login-banner.jpeg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

interface State {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	toastOpen: boolean;
	toastVariant: 'error' | 'success' | 'info' | 'warning' | undefined;
	toastMessage: string | undefined;
}

@connectRobin([SimplusAuthRobin])
const Register = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState<State>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		toastOpen: false,
		toastVariant: undefined,
		toastMessage: undefined
	});

	const handleToastClose = (_event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setValues({...values, toastOpen: false, toastMessage: undefined});
	}

	const handleToastOpen = (toastVariant, toastMessage) => {
		setValues({...values, toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage});
	}

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const register = (event: React.FormEvent) => {
		event.preventDefault();
		const user = {
			'name': `${values.name}`,
			'email': `${values.email}`,
			'password': `${values.password}`,
			'repeat_password': `${values.confirmPassword}`,
			'user_type': `admin`
		};
		SimplusAuthRobin.when(SimplusAuthRobin.post('register', `/auth/register`, user)).then(() => {
			const registeredUser = SimplusAuthRobin.getResult('register');
			handleToastOpen('success', registeredUser.message)
			// redirect to login view
		}).catch(err => {
			if (err.response.data.error && Object.keys(err.response.data.error).length) {
				handleToastOpen('error', err.response.data.error.detail)
			} else {
				handleToastOpen('error', err.response.data.message)
			}
		})
	}

	return (
		<ErrorBoundary>
			<Container component="main" maxWidth="xs">
				<CustomizedSnackbars open={values.toastOpen} variant={values.toastVariant} message={values.toastMessage} handleToastClose={handleToastClose}/>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<form className={classes.form} noValidate onSubmit={register}>
					<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='name'
									name='Name'
									variant='outlined'
									required
									fullWidth
									id='Name'
									type='text'
									label='Name'
									autoFocus
									onChange={handleChange('name')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='email'
									type='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									onChange={handleChange('email')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									onChange={handleChange('password')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='confirmPassword'
									label='Confirm Password'
									type='password'
									id='confirmPassword'
									autoComplete='confirm-password'
									onChange={handleChange('confirmPassword')}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.submit}
						>
							Sign Up
						</Button>
						<Grid container>
							<Grid item xs>
								{/* <Link to='/forgot-password' style={{color: '#f50057', textDecoration: 'none'}}>
									Forgot password?
								</Link> */}
							</Grid>
							<Grid item>
								<Link href='/#/login' variant='body2' color='secondary'>
								Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={5}>
					<MadeWithLove />
				</Box>
			</Container>
		</ErrorBoundary>	
	);
}

export default Register;