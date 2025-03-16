import regServices from "./regServices"
import { Request, Response } from "express"


async function login(req : Request , res : Response){
    const data = req.body
    const result = await regServices.login(data.email, data.password)
    res.json(result)
}

async function registration(req : Request , res : Response){
    const data = req.body
    const result = await regServices.registration(data)
    res.json(result)
}

async function getUserById(req: Request, res: Response){
    const result = await regServices.getUserById(+res.locals.userId.id)
    res.json(result)
}

const regController = {
    registration: registration,
    login: login,
    getUserById: getUserById
}
export default regController