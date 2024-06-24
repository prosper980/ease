import { createBrowserRouter } from "react-router-dom";
import SignUpForm from "./components/auth/sign-up-form/SignUpForm";
import  signUpAction  from "./routes-actions/auth-actions/sign-up-action";
import signUpLoader from "./routes-loaders/sign-up-loader";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <SignUpForm />,
        action : signUpAction,
        loader : signUpLoader

    },
    {
        path : "/shop",
        element : <h2> Shop </h2>
    }
])