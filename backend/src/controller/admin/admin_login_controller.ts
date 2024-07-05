import { Response, Request } from "express";

const adminRegisterController = (req: Request, res: Response) => {

    try {
        const { adminUserName, adminPassword, adminPasswordConfirm } = req.body

        if (!adminUserName || !adminPassword || !adminPasswordConfirm) {
            res.status(204).send({ error: "No body data in request", success: false });
            return;
        }

        if (adminPassword !== adminPasswordConfirm) {
            res.status(400).send({ error: "Admin passwords do not match", success: false });
            return;
        }

        //check if username exist here
        console.log(req.body);
    } catch (error) {

        console.log(error)
        res.status(500).send({ error: "No data in request", success: false });
        return;

    }
}

export default adminRegisterController;