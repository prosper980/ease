import { GoogleLogin } from "@react-oauth/google";



const GoogleSignUp = () => {
    
    
    return(
        <div>
            <GoogleLogin text="signup_with" size="large" shape="rectangular" theme="filled_black" onSuccess={responseMessage => {
                console.log(responseMessage);
                localStorage.setItem("google-auth-data", JSON.stringify(responseMessage));
            }} onError={()  => {
                console.log("Google Login failed")
            }} />
        </div>
    )
}

export default GoogleSignUp;