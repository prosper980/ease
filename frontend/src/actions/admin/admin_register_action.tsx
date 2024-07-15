import { ActionFunction, redirect } from "react-router";
import  axios, { AxiosError }  from "axios"

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
            baseURL : "http://localhost:3000"
        });
        
        if(axiosRes.status !== 201){
            return axiosRes.data?.data.message;
            
        }

        return redirect(`/admin/home/${axiosRes.data?.data.adminId}`);
    
    } catch (error) {

        if(error instanceof AxiosError){
            return (error?.response?.data?.error)
        }
        return null;
    }

}