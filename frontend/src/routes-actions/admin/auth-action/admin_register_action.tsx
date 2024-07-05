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
        // const JsonFormData = JSON.stringify(formData);
        const axiosRes = await axios.post("http://localhost:3000/admin/register", formData);

        console.log(axiosRes)
    } catch (error) {
        console.error(error);
    }


    return null;
}