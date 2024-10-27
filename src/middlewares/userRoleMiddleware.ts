import { Request, Response, NextFunction } from 'express';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction) {
    const userCookie = req.cookies.user
    // console.log(userCookie)
    if (userCookie) {
        const user = JSON.parse(userCookie) 
        if (user.role === 'user') {
            console.log(user)
            next()
        }
    }
    res.sendStatus(403)
}