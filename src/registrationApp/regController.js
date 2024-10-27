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
// Пример сервиса, который будет проверять логин и пароль
// Обычно в сервисе происходит запрос к базе данных
const regServices_1 = __importDefault(require("./regServices"));
function login(req, res) {
    res.render('login');
}
function registration(req, res) {
    res.render('registration');
}
function authLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = req.body;
        const user = yield regServices_1.default.authenticateUser(userData.email, userData.password);
        if (user) {
            console.log(JSON.stringify(user), "Успешный вход");
            res.cookie('user', JSON.stringify(user));
            res.sendStatus(200);
            return;
        }
        res.sendStatus(401);
    });
}
function authRegistration(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        const newUser = yield regServices_1.default.registerUser(user.email, user.password, user.username);
        if (newUser == "User exists") {
            console.log('User exists');
            res.sendStatus(409);
            return;
        }
        console.log(JSON.stringify(newUser), 'Успешная регистрация');
        res.cookie('user', JSON.stringify(newUser));
        res.sendStatus(201);
    });
}
const regController = {
    login: login,
    authLogin: authLogin,
    authRegistration: authRegistration,
    registration: registration
};
exports.default = regController;
