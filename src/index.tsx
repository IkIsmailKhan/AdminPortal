import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Admin from './layouts/Admin';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

// Robin methods
import { robins } from 'src/robins'
import { RobinProvider } from '@simplus/robin'
import RobinReact from '@simplus/robin-react'
import { ErrorBoundary } from './utils/ErrorBoundary';
const provider = new RobinProvider(robins);
RobinReact.setProvider(provider);
const cookies = new Cookies();

// Axios request interceptor : Set headers for authentication
axios.interceptors.request.use((request) => {
	if (cookies.get('token')) {
		const token = cookies.get('token');
		if ( token !== null && token !== undefined && token !== '' ) {
			request.headers.token = `${token}`;
		}
	}
	return request;
}, function (error) {
	return Promise.reject(error);
});

// Axios response interceptor : Remove cookie and redirect to login
axios.interceptors.response.use((response) => {
	return response;
}, function (error) {
	if (error.response.status === 401) {
		cookies.remove('token', { path: '/' });
		setTimeout(() => {
			window.location.replace(`${window.location.origin}/login`);
		}, 3000);
		return Promise.reject(error);
	} else {
		return Promise.reject(error);
	}
});

const checkUserSession = () => {
	if (cookies.get('token')) {
		return true;
	} else {
		return false;
	}
}

ReactDOM.render(
	<ErrorBoundary>
		<Router>
				{
					checkUserSession() ?
					<Switch>
						<Route path='/admin' component={Admin} />
						<Redirect from='/' to='/admin/dashboard' />
					</Switch>
					:
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Register} />
						<Redirect from='/' to='/login' />
					</Switch>
				}
		</Router>
	</ErrorBoundary>,
	document.getElementById('my-awesome-app')
);