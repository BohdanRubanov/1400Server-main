import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const userCookie = req.cookies
    // console.log(userCookie)
    // if (userCookie) {
    //     const user = JSON.parse(userCookie)
    //     console.log(user)
    //     if (user.email && user.username && user.role) {
    //         // console.log(user)
    //         next()
    //     }
    // }
    if (userCookie.token){
        const token = verify(userCookie.token, SECRET_KEY)
        res.locals.user = token
        if (res.locals.user.email && res.locals.user.username && res.locals.user.role) {
                next()}
    } else {
        res.sendStatus(401)
    }

}