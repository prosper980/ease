import { ActionFunction,redirect } from "react-router";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../../global";


export const signInAction : ActionFunction = async ({request}) => {

    try {
        
        const formData = Object.fromEntries(await request.formData())

        const { username, password } = formData;
        if(!username || !password){
            return "Error: All Fields are required";
        }

        const axiosReq = await axios({
            method : "post",
            data : formData,
            withCredentials : true,
            url : "/admin/signin",
            baseURL : `${baseUrl}`
        });

        if(axiosReq.status !== 200){
            return axiosReq.data?.message;            
        }
        
        return redirect(`/admin/home/${axiosReq.data?.data.adminId}`);
    } catch (error) {
    
        if(error instanceof AxiosError){
            return error.response?.data?.message;
        }
        return null;
    }

}