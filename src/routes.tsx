import { DashboardTwoTone, PeopleTwoTone, ComputerTwoTone, LocalActivityTwoTone } from '@material-ui/icons';
// core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard';
import UsersPage from './views/Users/Users';
import ProjectsPage from './views/Projects/Projects';
import CustomersPage from './views/Customers/Customers';

const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: DashboardTwoTone,
		component: DashboardPage,
		layout: '/admin'
	},
	{
		path: '/projects',
		name: 'Projects',
		icon: ComputerTwoTone,
		component: ProjectsPage,
		layout: '/admin'
	},
	{
		path: '/users',
		name: 'Users',
		icon: PeopleTwoTone,
		component: UsersPage,
		layout: '/admin'
	},
	{
		path: '/customers',
		name: 'Customers',
		icon: LocalActivityTwoTone,
		component: CustomersPage,
		layout: '/admin'
	}
];

export default dashboardRoutes;
