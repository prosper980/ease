import { Response, Request } from "express";
import { checkAdminUsernameExist } from "../../services/db/admin/checkAdminExist";
import { addNewAdmin } from "../../services/db/admin/addNewAdmin";
import { passwordHash } from "../../services/password_hash";
import { jwtTokenGen } from "../../services/jwt_token_gen";
import ms from "ms"

const adminRegisterController = async (req: Request, res: Response) => {

    try {
        const { adminUserName, adminPassword, adminPasswordConfirm } = req.body
        if (!adminUserName || !adminPassword || !adminPasswordConfirm) {
            res.status(400).send({ error: "No body data in request", success: false });
            return;
        }

        if (adminPassword !== adminPasswordConfirm) {
            res.status(400).send({ error: "Admin passwords do not match", success: false });
            return;
        }

        //check if username
        const userExist = await checkAdminUsernameExist(adminUserName);

        if (userExist) {
            res.status(409).send({ error: `User with username : ${adminUserName}, already exits`, success: false, data: {} });
            return;
        }

        //hash password and save
        //generate cookies
        const hashedPassword = await passwordHash(adminPassword);

        if (typeof hashedPassword === 'string') {

            const newAdmin = await addNewAdmin(adminUserName, hashedPassword);
            if (newAdmin) {

                const cookieToken = jwtTokenGen(adminUserName);

                res.cookie("admin-cookie", cookieToken, { maxAge: ms("1d"), httpOnly: true })

                if (!cookieToken) {
                    res.status(500).send({ error: "Sever error", success: false, data: {} });
                    return;
                }

                res.status(201).send(
                    {
                        error: "Admin Added", success: true, data:
                        {
                            username: adminUserName,
                        }
                    });
                return;
            }

        } else {
            res.status(500).send({ error: "Sever error", success: false, data: {} });
            return;
        }

        res.status(200).send({ error: "Admin testing", success: true, data: {} });
        return;

    } catch (error) {

        console.log(error)
        res.status(500).send({ error: "No data in request", success: false });
        return;
    }
}

export default adminRegisterController;