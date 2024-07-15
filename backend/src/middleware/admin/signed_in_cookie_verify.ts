import { NextFunction, Request, Response } from "express";
import { cookieName } from "../../global";
import coookieVerify from "../../services/admin/cookie_verify";

export const signedInCookieVerify = (req: Request, res: Response, next: NextFunction) => {

    const cookie = req.cookies[cookieName];

    if (!cookie) {
        res.status(401).send({ message: "Session expired sign in", success: false });
        return;
    }

    const cookieAuthenticity = coookieVerify(cookie);

    if (!cookieAuthenticity) {
        res.status(401).send({ success: false, message: "session time out" });
        return;
    }

    next();
}