import { LoaderFunction } from "react-router";
import axios, { AxiosError, AxiosResponse } from 'axios'


const signUpLoader : LoaderFunction = async () => {
    
    
    try {
        
        const authLocalStorageData : null | string = localStorage.getItem("google-auth-data");
    
        if(typeof authLocalStorageData !== 'string' || !authLocalStorageData){
            //redirect user login
            return null;
        }
    
        if(typeof authLocalStorageData === 'string'){
            const userData = JSON.parse(authLocalStorageData);
            //console.log(userData?.credential);
            
            
        
        
    
                const axiosUserData : AxiosResponse =  await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData?.credential}`, {
                    headers: {
                        Authorization: `Bearer ${userData?.credential}`,
                        Accept: 'application/json'
                    }
    
                })
                
                console.log(axiosUserData.data?.errors);
    
        }
    

    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error.response?.data?.error?.message);
        }
        console.error(error); 
    }

    return null;
}

export default signUpLoader;