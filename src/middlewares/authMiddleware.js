"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = require("jsonwebtoken");
const token_1 = require("../config/token");
function authMiddleware(req, res, next) {
    const userCookie = req.cookies;
    // console.log(userCookie)
    // if (userCookie) {
    //     const user = JSON.parse(userCookie)
    //     console.log(user)
    //     if (user.email && user.username && user.role) {
    //         // console.log(user)
    //         next()
    //     }
    // }
    if (userCookie.token) {
        const token = (0, jsonwebtoken_1.verify)(userCookie.token, token_1.SECRET_KEY);
        res.locals.user = token;
        if (res.locals.user.email && res.locals.user.username && res.locals.user.role) {
            next();
        }
    }
    else {
        res.sendStatus(401);
    }
}
