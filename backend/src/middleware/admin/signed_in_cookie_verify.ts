import { NextFunction, Request, Response } from "express";


export const signedInCookieVerify = (req: Request, res: Response, next: NextFunction) => {

    const adminCookie = req.cookies["admin-cookie"];

    if (!adminCookie) {
        res.status(401).send({ message: "Session expired sign in", success: false });
    }

    next();
}