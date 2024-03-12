import CreateAccountModal from "./components/CreateAccountModal"
import LoginModal from "./components/LoginModal"
import Task from "./components/Task"
import Auth from "./pages/Auth"
import { TODO_ROUTE, LOGIN_ROUTE, TASKLIST_ROUTE, TODO_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: TODO_ROUTE,
        Component: Admin
    },
    {
        path: TODO_ROUTE,
        Component: Task
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginModal
    },
    {
        path: REGISTRATION_ROUTE,
        Component: CreateAccountModal
    },
]