import express, { Request, Response } from "express";
import adminRegisterController from "../../controller/admin/admin_login_controller";

export const adminRoutes = express.Router();


adminRoutes.get("/", (req: Request, res: Response) => {


    console.log("admin main");
    res.send("Admin end");
})

adminRoutes.post("/register", (req: Request, res: Response) => {
    adminRegisterController(req, res);
});