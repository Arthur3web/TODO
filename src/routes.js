import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export const authRoutes = [
  {
    path: "/",
    Component: MainPage,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/registration",
    Component: RegistrationPage,
  },
];
