import Login from '../components/Account/Login';
import Register from '../components/Account/Register';
import Calendar from '../pages/bodyguard/Calendar/Calendar';
import Contract from '../pages/client/Contract/Contract';
import ContractBG from '../pages/bodyguard/Contract/Contract';
import Feedback from '../pages/client/Feedback/Feedback';
import HomePage from '../pages/client/HomePage/HomePage';
import Notifications from '../pages/client/Notifications/Notifications';
import Profile from '../pages/client/Profile/Profile';
import Service from '../pages/client/Service/Service';
import ResetPass from '../components/Account/ResetPass';

export const routes = [
  {
    path: '/',
    element: HomePage,
    title: 'NSGSecure',
    isShowHeader: true
  },
  {
    path: '/contracts',
    element: Contract,
    title: 'Contracts',
    isShowHeader: true
  },
  {
    path: '/profile',
    element: Profile,
    title: 'Profile',
    isShowHeader: true
  },
  {
    path: '/feedback',
    element: Feedback,
    title: 'Feedback',
    isShowHeader: true
  },
  {
    path: '/services',
    element: Service,
    title: 'Service',
    isShowHeader: true
  },
  {
    path: '/notifications',
    element: Notifications,
    title: 'Notifications',
    isShowHeader: true
  },
  {
    path: '/login',
    element: Login,
    title: 'Login',
    isShowHeader: false
  },
  {
    path: '/reset',
    element: ResetPass,
    title: 'ResetPass',
    isShowHeader: false
  },
  {
    path: '/register',
    element: Register,
    title: 'Register',
    isShowHeader: false
  },
  {
    path: '/profile-bodyguard',
    element: Profile,
    title: 'Profile',
    isShowHeader: true
  },
  {
    path: '/calendar-bodyguard',
    element: Calendar,
    title: 'Calendar',
    isShowHeader: true
  },
  {
    path: '/contracts-bodyguard',
    element: ContractBG,
    title: 'Contract',
    isShowHeader: true
  }
];
