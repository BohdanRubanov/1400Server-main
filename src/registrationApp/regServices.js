"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regRepository_1 = __importDefault(require("./regRepository"));
function authenticateUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield regRepository_1.default.findUserByEmail(email);
        if (!user) {
            return null;
        }
        if (user.password != password) {
            return null;
        }
        const userWithoutPassword = {
            username: user.username,
            email: user.email,
            role: user.role
        };
        return userWithoutPassword;
    });
}
function registerUser(email, password, username) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExist = yield regRepository_1.default.findUserByEmail(email);
        if (userExist) {
            return "User exists";
        }
        const newUser = {
            email: email,
            password: password,
            username: username,
            role: "user"
        };
        const createUser = yield regRepository_1.default.createUser(newUser);
        return createUser;
    });
}
const regService = {
    authenticateUser: authenticateUser,
    registerUser: registerUser
};
exports.default = regService;
