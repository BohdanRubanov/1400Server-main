import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";

import { IErrors, errors } from "../config/errorCodes"
import {CreateUser } from "./types"

async function findUserByEmail(email: string){
    try {
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}
async function findUserById(id: number){
    try {
        let user = await client.user.findUnique({
            where: {
                id: id
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

const regRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    findUserById: findUserById
}

export default regRepository;