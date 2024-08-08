import Login from '../pages/client/Account/Login';
import HomePage from '../pages/client/HomePage/HomePage';

export const routes = [
  {
    path: '/',
    element: HomePage,
    title: 'NSGSecure',
    isShowHeader: true
  },
  {
    path: '/sign-in',
    element: Login,
    title: 'Sign In',
    isShowHeader: false
  }
];
