import express, { Request, Response } from "express";
import adminRegisterController from "../../controller/admin/signup_controller";
import { signedInCookieVerify } from "../../middleware/admin/signed_in_cookie_verify";
import signInController from "../../controller/admin/signin_controller";
import adminHomeController from "../../controller/admin/admin_home_controller";
import signOutController from "../../controller/admin/sign_out_controller";
import adminDetail from "../../controller/admin/admin_detail";

export const adminRoutes = express.Router();


adminRoutes.post("/", (req: Request, res: Response) => {
    adminHomeController(req, res);
})

adminRoutes.post("/sign-out", (req: Request, res: Response) => {
    signOutController(req, res);
})

adminRoutes.post("/register", (req: Request, res: Response) => {
    adminRegisterController(req, res);
});

adminRoutes.post("/signin", (req: Request, res: Response) => signInController(req, res));


//middleware keep here
adminRoutes.use(signedInCookieVerify);

adminRoutes.get("/adminData", (req: Request, res: Response) => adminDetail(req, res));



