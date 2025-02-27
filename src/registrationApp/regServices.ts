import { Prisma } from "@prisma/client";
import regRepository from "./regRepository";
import { IError, ISuccess } from '../types/types'
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import { compare, hash } from "bcryptjs"

async function login(email: string, password: string): Promise< IError | ISuccess<string> > {
    let user = await regRepository.findUserByEmail(email)
    if (!user){
        return {status: 'error', message: 'user not found'};
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch){
        return {status: 'error', message: 'passwords do not match'};
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token};
}



async function registration(data: Prisma.UserCreateInput): Promise< IError | ISuccess<string> > {
    const user = await regRepository.findUserByEmail(data.email)
    
    if (user) {
        return {status: 'error', message: 'User exists'}
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword
    }
    const newUser = await regRepository.createUser(userData)
    if (!newUser) {
        return {status: 'error', message: 'bad user'}
    }

    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: '1d'})
    return {status: 'success', data: token}
}


const regSerices = {
    login: login,
    registration: registration
}


export default regSerices;