import { ActionFunction, LoaderFunctionArgs } from "react-router";



/* 
    Action for sign up
*/



const signupAction: ActionFunction = async ({ request } : LoaderFunctionArgs ) => {

    

    //create object from entries
    const formData = Object.fromEntries(await request.formData());

    const { first_name, last_name, new_user_email, new_user_first_password, new_user_second_password } = formData;

    if(!first_name || !last_name || !new_user_email || !new_user_first_password || !new_user_second_password){
        return  "Fill all fields.";
    }

    if(typeof new_user_email === "string" && !new_user_email.includes("@")){
        return "Invalid Email."
    }

    if(new_user_first_password !== new_user_second_password){
        return "Passwords do not match.";
    }

    if(new_user_email.toString().length < 8){
        return " Password should be more than 8 characters";
    }

    return null;
}

export default signupAction;