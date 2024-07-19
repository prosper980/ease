import { ActionFunction, redirect } from "react-router";
import  axios, { AxiosError }  from "axios"
import { baseUrl } from "../../global";


/**
 * 
 * @param param0 react-router request object
 * @returns redirect to dashboard || null
 */
export const adminRegisterAction : ActionFunction = async ({ request }) => {

    const formData = Object.fromEntries(await request.formData());

    const { username, password, passwordConfirm } = formData;
    
    if(!username || !password || !passwordConfirm){
        return "Error: All Fields are required";
    }

    if(password !== passwordConfirm){
        return "Passwords do not match";
    }

    try {

        const axiosRes = await axios({
            method : "post",
            data : formData,
            withCredentials : true,
            url : "/admin/register",
            baseURL : `${baseUrl}`
        });
        
        if(axiosRes.status !== 201){
            console.log(axiosRes.data?.message);
            return axiosRes.data?.message;            
        }

        return redirect(`/admin/${axiosRes.data?.userData.adminUsername}/dashboard`);
    
    } catch (error) {

        if(error instanceof AxiosError){
            return (error?.response?.data?.error)
        }
        return null;
    }

}