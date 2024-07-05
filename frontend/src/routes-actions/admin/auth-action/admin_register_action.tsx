import { ActionFunction } from "react-router";


export const adminRegisterAction : ActionFunction = async ({ request }) => {

    const formData = Object.fromEntries(await request.formData());

    const { adminUserName, adminPassword, adminPasswordConfirm } = formData;
    
    if(!adminUserName || !adminPassword || !adminPasswordConfirm){
        return "Error: All Fields are required";
    }

    if(adminPassword !== adminPasswordConfirm){
        return "Passwords do not match";
    }

    
    console.log(adminUserName, adminPassword, adminPasswordConfirm);
    
    return null;
}