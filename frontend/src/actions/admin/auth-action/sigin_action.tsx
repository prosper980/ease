import { ActionFunction,redirect } from "react-router";
import axios from "axios";


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
            baseURL : "http://localhost:3000"
        });

        if(axiosReq.status !== 200){
            return axiosReq.data?.data.message;
            
        }

        return redirect(`/admin/home/${axiosReq.data?.data.adminId}`);

    } catch (error) {
        console.log(error);
        return null;
    }

}