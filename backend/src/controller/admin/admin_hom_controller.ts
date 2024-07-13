import exp from "constants";
import { Request, Response } from "express"




const adminHomeController = async (req: Request, res: Response) => {

    try {

        const cookie = req.cookies["admin-cookie"];

        if (!cookie) {
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