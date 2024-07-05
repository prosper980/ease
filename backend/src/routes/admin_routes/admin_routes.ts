import express, { Request, Response } from "express";

export const adminRoutes = express.Router();


adminRoutes.get("/", (req: Request, res: Response) => {


    console.log("admin main");
    res.send("Admin end");
})