import { createBrowserRouter } from "react-router-dom";
import SignInForm from './components/auth/sign-in-form/SignInForm';
import RootLayout from "./root-layout";
import ShopHome from "./components/shop-components/ShopIndex";


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
            }
        ]
    }
])  