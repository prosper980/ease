import axios from "axios";
import { ActionFunction } from "react-router";
import { baseUrl } from "../../global";


export const adminAction : ActionFunction = async ({ request }) => {

    try {
        
        const formData = await request.formData();

        const intent = formData.get("intent");

        if(intent === "sign-out"){
                
         await axios({
                method : "post",
                url : "/admin/sign-out",
                withCredentials : true,
                baseURL : `${baseUrl}`
            });
        }


        return null;

    } catch (error) {
        console.log(`Admin action error => : ${error}`);
        return null;
    }

}

