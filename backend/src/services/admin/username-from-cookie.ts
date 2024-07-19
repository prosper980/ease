
import jwt from "jsonwebtoken"


const userNameFromCookies = (cookie: string): string | null => {

    try {

        const verify = jwt.verify(cookie, process.env.JWT_SECRET);

        if (typeof verify === 'object') {
            return verify?.adminName;
        }

        return null;
    } catch (error) {
        console.log(`Error in cookie verify => ${error}`);
        return null;
    }

}

export default userNameFromCookies;