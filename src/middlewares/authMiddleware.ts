import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const userCookie = req.cookies.user
    // console.log(userCookie)
    if (userCookie) {
        const user = JSON.parse(userCookie)
        console.log(user)
        if (user.email && user.username && user.role) {
            // console.log(user)
            next()
        }
    }

    res.sendStatus(401)
}