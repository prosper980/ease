import { LoaderFunction, redirect } from "react-router";
import axios from "axios";
import { baseUrl } from "../../global";

export const adminHomeLoaderFunction : LoaderFunction = async () : Promise<object | null> => {

    try {
        
        const res = await axios({
            method : "post",
            withCredentials : true,
            url : "/admin/",
            baseURL : "http://localhost:3000"
        });

        if(res.status !== 200){
            return redirect("/admin");
        }

        const getRes = await axios({
            method : "get",
            withCredentials : true,
            url : "/admin//adminData",
            baseURL : `${baseUrl}`
        });

        if(getRes.status === 200){
            return getRes.data?.resData;
        }

        return  null;
    } catch (error){
        console.log(error);
        return redirect("/admin");
    }

    
} 