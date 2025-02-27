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



const regController = {
    registration: registration,
    login: login
}
export default regController