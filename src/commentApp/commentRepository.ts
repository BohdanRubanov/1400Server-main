import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes'


async function getAllComments(){
    try{
        let comments = await client.comment.findMany({
        
        })
        return comments
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getCommentsByUserId(id: number) {
    let comments = await client.comment.findMany({
        where: {
            userId: id
        }
    });
    return comments
}
async function getCommentsByPostId(id: number) {
    let comments = await client.comment.findMany({
        where: {
            postId: id
        }
    });
    return comments
}



const commentRepository = {
    getAllComments: getAllComments,
    getCommentsByUserId: getCommentsByUserId,
    getCommentsByPostId: getCommentsByPostId
}
export default commentRepository