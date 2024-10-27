"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
function authMiddleware(req, res, next) {
    const userCookie = req.cookies.user;
    // console.log(userCookie)
    if (userCookie) {
        const user = JSON.parse(userCookie);
        console.log(user);
        if (user.email && user.username && user.role) {
            // console.log(user)
            next();
        }
    }
    res.sendStatus(401);
}
