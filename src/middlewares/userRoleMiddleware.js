"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoleMiddleware = userRoleMiddleware;
function userRoleMiddleware(req, res, next) {
    const userCookie = req.cookies.user;
    // console.log(userCookie)
    if (userCookie) {
        const user = JSON.parse(userCookie);
        if (user.role === 'user') {
            console.log(user);
            next();
        }
    }
    res.sendStatus(403);
}
