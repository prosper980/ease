import { createBrowserRouter } from "react-router-dom";
import SignInForm from './components/auth/sign-in-form/SignInForm';
import RootLayout from "./root-layout";
import ShopHome from "./components/shop-components/ShopIndex";
import AdminAuth from "./components/admin/auth/SignIn";
import AdminRegister from "./components/admin/auth/Register";
import { adminRegisterAction } from './actions/admin/admin-register-action';
import { signInAction } from "./actions/admin/sigin-action";
import DashboardHome from "./components/admin/dashboard/MainDashBoard";
import { adminHomeLoaderFunction } from './loaders/admin/admin-home-loader';
import { adminAction } from "./actions/admin/dashboard-action";
import { ErrorPage } from "./components/ErrorPage";
import { DashBoardPage } from "./components/admin/dashboard/nav/nav-pages/DashboardPage";
import { AddItemPage } from "./components/admin/dashboard/nav/nav-pages/AddItemPage";
import { TaskPage } from "./components/admin/dashboard/nav/nav-pages/TaskPage";
import { Inventory } from "./components/admin/dashboard/nav/nav-pages/inventory/Inventory";


export const routes = createBrowserRouter([
    {
        element : <RootLayout />,
        errorElement : <ErrorPage />,
        children :[
            {
                path : "/sign-in",
                element : <SignInForm /> 
            },
            {
                path : "/",
                element : <ShopHome />
            },
            {
                path : "/admin",
                element : <AdminAuth />,
                action : signInAction,
            },
            {
                path : "/admin/register",
                element : <AdminRegister />,
                action : adminRegisterAction
            },
            {
                path : "/admin/:adminId/",
                element : <DashboardHome />,
                loader : adminHomeLoaderFunction,
                action : adminAction,
                errorElement : <ErrorPage />,

                children : [
                    {
                        path : "/admin/:adminId/dashboard",
                        element : <DashBoardPage />
                    },
                    {
                        path : "/admin/:adminId/addItems",
                        element : <AddItemPage />
                    },
                    {
                        path : "/admin/:adminId/inventory",
                        element : <Inventory />
                    },
                    {
                        path : "/admin/:adminId/customers",
                        element : <TaskPage />
                    },

                    {
                        path : "/admin/:adminId/orders",
                        element : <TaskPage />
                    }
                    
                ]
            }
        ]
    }
])  