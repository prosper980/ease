import { LoaderFunction, redirect } from "react-router";
import axios from "axios";

export const adminHomeLoaderFunction : LoaderFunction = async () => {

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
        return  null;
    } catch (error){
        console.log(error);
        return redirect("/admin");
    }

    
} 