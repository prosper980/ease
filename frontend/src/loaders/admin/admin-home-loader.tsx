import { LoaderFunction, redirect } from "react-router";
import axios from "axios";
import { baseUrl } from "../../global";


/**
 * Admin home loader function
 * @returns {Promise} admin data for dashboard
 */
export const adminHomeLoaderFunction : LoaderFunction = async () : Promise<object | null> => {

    try {
        
        //read admin username form localstorage
        const adminUsernameLocalStorageData = localStorage.getItem("uname");

        //error checks
        if(!adminUsernameLocalStorageData || typeof adminUsernameLocalStorageData !== "string"){
            return redirect("/admin");
        }else{
            const jsonLocalStorageData = JSON.parse(adminUsernameLocalStorageData)

            /* Get admin data for dashboard */
            const getReq = await axios({
                method : "get",
                withCredentials : true,
                url : `/admin/adminData/${jsonLocalStorageData}`,
                baseURL : `${baseUrl}`
            });

            if(getReq.status !== 200){
                return redirect("/admin");
            }

            if(getReq.status === 200){
                return getReq.data?.resData;
            }
        }
        return  null;
    } catch (error){
        console.log(error);
        return redirect("/admin");
    }

    
} 