import { Request, Response } from "express"
import userNameFromCookies from "../../services/admin/username_from_cookie";
import { cookieName } from "../../global";
import { getAdminData } from "../../services/admin/get_admin_data";

const adminDetail = async (req: Request, res: Response) => {

    try {

        const username = userNameFromCookies(req.cookies[cookieName]);

        if (!username) {
            res.status(400).send({ message: "Invalid username", success: false });
            return;
        }

        const data = await getAdminData(username);


        if (!data) {
            res.status(400).send({ message: "Invalid username", success: false });
            return;
        }

        res.status(200).send({ resData: data, success: true });
        return;


    } catch (error) {
        console.log(`Error in adminDetail => ${error}`);


        res.status(500).send({ message: "Server Error", success: false });
        return;

        return;
    }
}

export default adminDetail;