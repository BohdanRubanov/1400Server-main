import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const authReq = req.headers.authorization
    if (!authReq) {
        res.json({status:"error", message: 'No headers'})
        return
    }
    if (authReq.substring(0, 6) !== "Bearer") {
        res.json({status:"error", message: 'invalid token'})
        return
    }
    const token = authReq.slice(7)
    const decoded_token = verify(token, SECRET_KEY)
    res.locals.userId = decoded_token
    next() 
}