import jwt from "jsonwebtoken"


const coookieVerify = (cookie: string): boolean => {

    try {
        jwt.verify(cookie, process.env.JWT_SECRET);
        return true;
    } catch (error) {
        console.log(`Error in cookie verify => ${error}`);
        return false;
    }

}
export default coookieVerify;