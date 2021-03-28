import React, { SyntheticEvent } from 'react';
import {
	Link
  } from "react-router-dom";
import { connectRobin } from '@simplus/robin-react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import Container from '@material-ui/core/Container';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { robins } from '../../robins';
import CustomizedSnackbars from '../../components/Toast/Toast';
import { ErrorBoundary } from 'src/utils/ErrorBoundary';

const { SimplusAuthRobin } = robins;

const MadeWithLove = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Built with love by the '}
			<a href='https://fourasol.com/' style={{color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none'}}>
				<b>Fourasol</b>
			</a>
			{' team.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	image: {
		backgroundImage: 'url(/src/assets/img/login-banner.jpeg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
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
	email: string;
	password: string;
	toastOpen: boolean;
	toastVariant: 'error' | 'success' | 'info' | 'warning' | undefined;
	toastMessage: string | undefined;
}

@connectRobin([SimplusAuthRobin])
const Login = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState<State>({
		email: '',
		password: '',
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

	const login = (event: React.FormEvent) => {
		event.preventDefault();
		const user = {
			'email': `${values.email}`,
			'password': `${values.password}`,
			'user_type': 'admin'
		};
		SimplusAuthRobin.when(SimplusAuthRobin.post('login', `/auth/login`, user)).then(() => {
			const loggedInUser = SimplusAuthRobin.getResult('login');
			handleToastOpen('success', loggedInUser.message);
			const cookies = new Cookies();
			cookies.set('token', loggedInUser.token, { path: '/', maxAge: 86400 });
			window.location.replace('/admin/dashboard');
		}).catch(err => {
			handleToastOpen('error', err.response.data.message)
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
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={login}>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							type='email'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={handleChange('email')}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={handleChange('password')}
						/>
						{/* <FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/> */}
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								{/* <Link to='/forgot-password' style={{color: '#f50057', textDecoration: 'none'}}>
									Forgot password?
								</Link> */}
							</Grid>
							<Grid item>
								<Link to="/signup" style={{color: '#f50057', textDecoration: 'none'}}>
									{'Dont have an account? Sign Up'}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<MadeWithLove />
				</Box>
			</Container>
		</ErrorBoundary>
	);
}

export default Login;