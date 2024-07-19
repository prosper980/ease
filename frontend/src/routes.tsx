import { createBrowserRouter } from "react-router-dom";
import SignInForm from './components/auth/sign-in-form/SignInForm';
import RootLayout from "./root-layout";
import ShopHome from "./components/shop-components/ShopIndex";
import AdminAuth from "./components/admin/auth/SignIn";
import AdminRegister from "./components/admin/auth/Register";
import { adminRegisterAction } from './actions/admin/admin-register-action';
import { signInAction } from "./actions/admin/sigin_action";
import DashboardHome from "./components/admin/dashboard/MainDashBoard";
import { adminHomeLoaderFunction } from './loaders/admin/admin-home-loader';
import { adminAction } from "./actions/admin/dashboard-action";


export const routes = createBrowserRouter([
    {
        element : <RootLayout />,
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

                children : [
                    {
                        path : "/admin/:adminId/dashboard",
                        element : <h2> Dashboard </h2>
                    },
                    {
                        path : "/admin/:adminId/addItems",
                        element : <h2> Add items </h2>
                    },
                    {
                        path : "/admin/:adminId/inventory",
                        element : <h2> Inventory </h2>
                    },
                    {
                        path : "/admin/:adminId/tasks",
                        element : <h2> Tasks </h2>
                    }
                    
                ]
            }
        ]
    }
])  