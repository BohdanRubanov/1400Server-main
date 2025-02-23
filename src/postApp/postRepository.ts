import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes'


async function getAllPosts(){
    try{
        let posts = await client.post.findMany({
        
        })
        return posts
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getPostById(id: number){
    let post = await client.post.findUnique({
        where:{
            id: id
        }
    })
    return post

}

async function createPost(data: Prisma.PostUncheckedCreateInput){
    let post = await client.post.create({
        data: data
    })
    return post
}  

const postRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}
export default postRepository