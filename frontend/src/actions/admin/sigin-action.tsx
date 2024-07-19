import { ActionFunction,redirect } from "react-router";
import axios, { AxiosError } from "axios";
import { baseUrl } from "../../global";



/**
 * Sign in Form Action
 * @param param0 
 * @returns {Promise}
 */
export const signInAction : ActionFunction = async ({request}) => {

    try {
        
        const formData = Object.fromEntries(await request.formData())

        const { username, password } = formData;
        if(!username || !password){
            return "Error: All Fields are required";
        }


        /**
         * post form-data to endpoint  
         */
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
                
        //store username in localstorage
        localStorage.setItem("uname", JSON.stringify(axiosReq.data?.userData.adminUsername));

        //redirect to dashboard with admin id => username
        return redirect(`/admin/${axiosReq.data?.userData.adminUsername}/dashboard`);

    } catch (error) {
    
        if(error instanceof AxiosError){
            return error.response?.data?.message;
        }
        return null;
    }

}