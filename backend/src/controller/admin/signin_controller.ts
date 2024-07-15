import { Request, Response } from "express"
import { getAdminByUsername } from "../../services/db/admin/get_admin_by_username";
import { jwtTokenGen } from "../../services/jwt_token_gen";
import ms from "ms";
import { getPassword } from "../../services/db/admin/get_password";
import { passwordDecode } from '../../services/password_decode';
import { cookieName } from "../../global";



const signInController = async (req: Request, res: Response) => {

    try {


        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).send({ message: "Data required", success: false });
            return;
        }

        const hashedPassword = await getPassword(username);

        if (!hashedPassword) {
            res.status(401).send({ message: "Invalid username or password", success: false });
            return;
        }

        const passwordDecoded = await passwordDecode(password, hashedPassword);

        if (!passwordDecoded) {
            res.status(401).send({ message: "Invalid username or password", success: false });
            return;
        }

        const adminIdByUsername = await getAdminByUsername(username);
        if (typeof adminIdByUsername !== null) {

            /* generate cookie token */
            const cookieToken = jwtTokenGen(username);

            res.cookie(cookieName, cookieToken, { maxAge: ms("1d"), httpOnly: true })

            if (!cookieToken) {
                res.status(500).send({ message: "Sever error", success: false, data: {} });
                return;
            }

            res.status(200).send(
                {
                    message: "signin", success: true, data:
                    {
                        username: username, adminId: adminIdByUsername
                    }
                });
            return;

        }

        res.status(401).send({ message: "Sever error try again", success: false });
        return;

    } catch (error) {
        console.log(`Server error => ${error}`);
        res.status(401).send({ message: "Sever error try again", success: false });

    }

}

export default signInController;