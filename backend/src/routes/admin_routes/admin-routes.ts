import express, { Request, Response } from "express";
import adminRegisterController from "../../controllers/admin/signup-controller";
import { signedInCookieVerify } from "../../middleware/admin/signed-in-cookie-verify";
import signInController from "../../controllers/admin/signin-controller";
import adminHomeController from "../../controllers/admin/admin-home-controller";
import signOutController from "../../controllers/admin/sign-out-controller";
import adminDetail from "../../controllers/admin/admin-detail";

export const adminRoutes = express.Router();


adminRoutes.post("/", (req: Request, res: Response) => adminHomeController(req, res));

adminRoutes.post("/sign-out", (req: Request, res: Response) => signOutController(req, res))

adminRoutes.post("/register", (req: Request, res: Response) => adminRegisterController(req, res));

adminRoutes.post("/signin", (req: Request, res: Response) => signInController(req, res));


//middleware keep here
adminRoutes.use(signedInCookieVerify);

//verify for admin Id

adminRoutes.get("/adminData/:adminId", (req: Request, res: Response) => adminDetail(req, res));



