import jwt from "jsonwebtoken"



/**
 * Verifies cookies 
 * @param {string} cookie - cookie to verify
 * @param {boolean} withUsername - return username after verify if true
 * @returns {boolean || string} - value to return depending on withUsername
 */
const coookieVerify = (cookie: string, withUsername: boolean): boolean | string => {

    try {
        const jwtData = jwt.verify(cookie, process.env.JWT_SECRET);
        if (typeof jwtData === "object" && withUsername) {
            return jwtData?.adminName;
        }
        return true;

    } catch (error) {
        console.log(`Error in cookie verify => ${error}`);
        return false;
    }

}
export default coookieVerify;