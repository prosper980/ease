import { ActionFunction } from "react-router";
import  axios  from "axios"

export const adminRegisterAction : ActionFunction = async ({ request }) => {

    const formData = Object.fromEntries(await request.formData());

    const { adminUserName, adminPassword, adminPasswordConfirm } = formData;
    
    if(!adminUserName || !adminPassword || !adminPasswordConfirm){
        return "Error: All Fields are required";
    }

    if(adminPassword !== adminPasswordConfirm){
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

        console.log(axiosRes);
    
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }


    
}