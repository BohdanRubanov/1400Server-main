import express, { Request, Response } from 'express';

// Пример сервиса, который будет проверять логин и пароль
// Обычно в сервисе происходит запрос к базе данных
import regService from './regServices';

function login(req: Request, res: Response){
    res.render('login')

}
function registration(req: Request, res: Response){
    res.render('registration')

}

async function authLogin(req: Request, res: Response) {

        const userData = req.body;
        const user = await regService.authenticateUser(userData.email, userData.password);

        if (user) {
            console.log(JSON.stringify(user), "Успешный вход")
            res.cookie('user', JSON.stringify(user));
            res.sendStatus(200)
            return
        }
        
        res.sendStatus(401)
     
}

async function authRegistration(req: Request, res: Response) {
    const user = req.body;

    const newUser = await regService.registerUser(user.email, user.password, user.username);


    if (newUser == "User exists") {
        console.log('User exists')
        res.sendStatus(409);
        return
    }

    console.log(JSON.stringify(newUser), 'Успешная регистрация')
    res.cookie('user', JSON.stringify(newUser))
    res.sendStatus(201)
}


const regController = {
    login: login,
    authLogin: authLogin,
    authRegistration: authRegistration,
    registration: registration
};

export default regController;