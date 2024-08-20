import Login from '../components/Account/Login';
import Register from '../components/Account/Register';
import Calendar from '../pages/bodyguard/Calendar/Calendar';
import Contract from '../pages/client/Contract/Contract';
import ContractBG from '../pages/bodyguard/Contract/Contract';
import ContractSP from '../pages/supervisor/Contract/Contract';
import Feedback from '../pages/client/Feedback/Feedback';
import HomePage from '../pages/client/HomePage/HomePage';
import Notifications from '../pages/client/Notifications/Notifications';
import Profile from '../pages/client/Profile/Profile';
import Service from '../pages/client/Service/Service';
import ResetPass from '../components/Account/ResetPass';
import TimeKeeping from '../pages/supervisor/TimeKeeping/TimeKeeping';
import Schedule from '../pages/supervisor/Schedule/Schedule';
import EditSchedule from '../pages/supervisor/Schedule/EditSchedule';
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import BodyguardManagement from '../pages/admin/Bodyguard/BodyguardManagement';
import AddBodyguard from '../pages/admin/Bodyguard/AddBodyguard';
import EditBodyguard from '../pages/admin/Bodyguard/EditBodyguard';
import TableBodyguard from '../pages/admin/Bodyguard/TableBodyguard';
import CustomerManagement from '../pages/admin/Customer/CustomerManagement';
import TableCustomer from '../pages/admin/Customer/TableCustomer';
import ContractManagement from '../pages/admin/Contract/ContractManagement';
import TableContract from '../pages/admin/Contract/TableContract';
import AddContract from '../pages/admin/Contract/AddContract';
import TableManagementContract from '../pages/admin/Contract/TableManagementContract';
import AddSupervisor from '../pages/admin/Supervisor/AddSupervisor';
import EditSupervisor from '../pages/admin/Supervisor/EditSupervisor';
import TableSupervisor from '../pages/admin/Supervisor/TableSupervisor';
import SupervisorManagement from '../pages/admin/Supervisor/SupervisorManagement';
import TableRegistration from '../pages/admin/Registration/TableRegistration';
import CustomerRegistrationManagement from '../pages/admin/Registration/CustomerRegistrationManagement';
import TableUser from '../pages/admin/User/TableUser';
import UserManagement from '../pages/admin/User/UserManagement';

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
  // path of bodyguard
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
  },
  // path of supervisor
  {
    path: '/timekeeping-supervisor',
    element: TimeKeeping,
    title: 'TimeKeeping',
    isShowHeader: true
  },
  {
    path: '/schedule-supervisor',
    element: Schedule,
    title: 'Schedule',
    isShowHeader: true
  },
  {
    path: '/edit-schedule-supervisor',
    element: EditSchedule,
    title: 'EditSchedule',
    isShowHeader: true
  },
  {
    path: '/contracts-supervisor',
    element: ContractSP,
    title: 'Contract',
    isShowHeader: true
  },
  {
    path: '/notifications-supervisor',
    element: Notifications,
    title: 'Notifications',
    isShowHeader: true
  },
  // admin path
  {
    path: '/dashboard-admin',
    element: Dashboard,
    title: 'Dashboard',
    isShowHeader: true
  },
  // management bodyguard
  {
    path: '/admin/bodyguard',
    element: BodyguardManagement,
    title: 'Bodyguard',
    isShowHeader: true
  },
  {
    path: '/admin/bodyguard-add',
    element: AddBodyguard,
    title: 'Bodyguard',
    isShowHeader: true
  },
  {
    path: '/admin/bodyguard-edit',
    element: EditBodyguard,
    title: 'Bodyguard',
    isShowHeader: true
  },
  {
    path: '/admin/bodyguard-table',
    element: TableBodyguard,
    title: 'Bodyguard',
    isShowHeader: true
  },
  // management customer
  {
    path: '/admin/customer',
    element: CustomerManagement,
    title: 'Customer',
    isShowHeader: true
  },

  {
    path: '/admin/customer-table',
    element: TableCustomer,
    title: 'Customer',
    isShowHeader: true
  },
  // management contract
  {
    path: '/admin/contract',
    element: ContractManagement,
    title: 'Contract',
    isShowHeader: true
  },
  {
    path: '/admin/contract/add',
    element: AddContract,
    title: 'Contract',
    isShowHeader: true
  },
  {
    path: '/admin/contract-management',
    element: TableManagementContract,
    title: 'Contract',
    isShowHeader: true
  },
  {
    path: '/admin/contract-table',
    element: TableContract,
    title: 'Contract',
    isShowHeader: true
  },
  // management supervisor
  {
    path: '/admin/supervisor',
    element: SupervisorManagement,
    title: 'Supervisor',
    isShowHeader: true
  },
  {
    path: '/admin/supervisor/add',
    element: AddSupervisor,
    title: 'Supervisor',
    isShowHeader: true
  },
  {
    path: '/admin/supervisor-edit',
    element: EditSupervisor,
    title: 'Supervisor',
    isShowHeader: true
  },
  {
    path: '/admin/supervisor-table',
    element: TableSupervisor,
    title: 'Supervisor',
    isShowHeader: true
  },
  // management registration
  {
    path: '/admin/registration',
    element: TableRegistration,
    title: 'Registration',
    isShowHeader: true
  },
  {
    path: '/admin/registration/customer',
    element: CustomerRegistrationManagement,
    title: 'Registration',
    isShowHeader: true
  },
  // management user
  {
    path: '/admin/user/table',
    element: TableUser,
    title: 'User',
    isShowHeader: true
  },
  {
    path: '/admin/user',
    element: UserManagement,
    title: 'User',
    isShowHeader: true
  }
];
