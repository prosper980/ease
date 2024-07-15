import exp from "constants";
import { Request, Response } from "express"
import { cookieName } from "../../global";
import coookieVerify from "../../services/admin/cookie_verify";




const adminHomeController = async (req: Request, res: Response) => {

    try {

        const cookie = req.cookies[cookieName];

        if (!cookie) {
            res.status(401).send({ success: false, message: "session time out" });
            return;
        }

        const cookieAuthenticity = coookieVerify(cookie);

        if (!cookieAuthenticity) {
            res.status(401).send({ success: false, message: "session time out" });
            return;

        }

        res.status(200).send({ success: true, message: "session time valid" });
        return;

    } catch (error) {
        console.log(`Home Controller Error => : ${error}`);
        res.status(500).send({ success: true, message: "server error" });
    }
}

export default adminHomeController