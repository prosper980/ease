import express, { Request, Response } from "express";
import adminRegisterController from "../../controller/admin/signup_controller";
import { signedInCookieVerify } from "../../middleware/admin/signed_in_cookie_verify";
import signInController from "../../controller/admin/signin_controller";
import adminHomeController from "../../controller/admin/admin_hom_controller";

export const adminRoutes = express.Router();


adminRoutes.post("/", (req: Request, res: Response) => {
    adminHomeController(req, res);
})

adminRoutes.post("/register", (req: Request, res: Response) => {
    adminRegisterController(req, res);
});

adminRoutes.post("/signin", (req: Request, res: Response) => {
    signInController(req, res);
});

//middleware keep here
adminRoutes.use(signedInCookieVerify)

