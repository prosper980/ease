import { createBrowserRouter } from "react-router-dom";
import SignInForm from './components/auth/sign-in-form/SignInForm';
import RootLayout from "./root-layout";
import ShopHome from "./components/shop-components/ShopIndex";
import AdminAuth from "./components/admin/auth/SignIn";
import AdminRegister from "./components/admin/auth/Register";
import { adminRegisterAction } from './routes-actions/admin/auth-action/admin_register_action';


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
                element : <AdminAuth />
            },
            {
                path : "/admin/register",
                element : <AdminRegister />,
                action : adminRegisterAction
            }
        ]
    }
])  