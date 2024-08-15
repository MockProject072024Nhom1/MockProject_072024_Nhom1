import Admin from "../pages/admin/Admin";
import AddContract from "../pages/admin/contract/AddContract";
import Login from "../pages/client/Account/Login";
import HomePage from "../pages/client/HomePage/HomePage";
import Supervisor from "../pages/supervisor/Supervisor";

export const routes = [
  {
    path: "/",
    element: HomePage,
    title: "NSGSecure",
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    element: Login,
    title: "Sign In",
    isShowHeader: false,
  },

  {
    path: "/admin/*",
    element: Admin,
    title: "Sign In",
    isShowHeader: false,
  },

  {
    path: "/supervisor/*",
    element: Supervisor,
    title: "Sign In",
    isShowHeader: false,
  },
];
