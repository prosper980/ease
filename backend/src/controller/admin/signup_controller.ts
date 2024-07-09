import { Response, Request } from "express";
import { checkAdminUsernameExist } from "../../services/db/admin/check_admin_exist";
import { addNewAdmin } from "../../services/db/admin/add_new_admin";
import { passwordHash } from "../../services/password_hash";
import { jwtTokenGen } from "../../services/jwt_token_gen";
import ms from "ms"
import { getAdminByUsername } from "../../services/db/admin/get_admin_by_username";

const adminRegisterController = async (req: Request, res: Response) => {

    try {
        const { username, password, passwordConfirm } = req.body
        if (!username || !password || !passwordConfirm) {
            res.status(400).send({ message: "No body data in request", success: false });
            return;
        }

        if (password !== passwordConfirm) {
            res.status(400).send({ message: "Admin passwords do not match", success: false });
            return;
        }

        //check if username
        const userExist = await checkAdminUsernameExist(username);

        if (userExist) {
            res.status(409).send({ message: `User with username : ${username}, already exits`, success: false, data: {} });
            return;
        }

        //hash password and save
        //generate cookies
        const hashedPassword = await passwordHash(password);

        if (typeof hashedPassword === 'string') {

            const newAdmin = await addNewAdmin(username, hashedPassword);
            if (newAdmin) {

                /* generate cookie token */
                const cookieToken = jwtTokenGen(username);

                res.cookie("admin-cookie", cookieToken, { maxAge: ms("1d"), httpOnly: true })

                if (!cookieToken) {
                    res.status(500).send({ message: "Sever error", success: false, data: {} });
                    return;
                }

                const adminIdByUsername = await getAdminByUsername(username);
                if (typeof adminIdByUsername !== null) {


                    res.status(201).send(
                        {
                            message: "Admin Added", success: true, data:
                            {
                                username: username, adminId: adminIdByUsername
                            }
                        });
                    return;

                }

                res.status(500).send({ message: "Sever error", success: false, data: {} });
                return;


            }

        } else {

            res.status(500).send({ message: "Sever error", success: false, data: {} });
            return;
        }

        res.status(500).send({ message: "Sever error", success: false, data: {} });
        return;

    } catch (error) {

        console.log(error)
        res.status(500).send({ message: "No data in request", success: false });
        return;
    }
}

export default adminRegisterController;