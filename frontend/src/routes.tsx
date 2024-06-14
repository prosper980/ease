import { createBrowserRouter } from "react-router-dom";
import SignUpForm from "./components/auth/sign-up-form/SignUpForm";
import  signUpAction  from "./router-actions/auth-actions/sign-up-action";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <SignUpForm />,
        action : signUpAction
    }
])