import { Prisma} from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes'
import { CreatePost, ErrorType } from './types';


async function getAllPosts(){
    try{
        let posts = await client.post.findMany({
        
        })
        return posts
    } catch(error){
        if (error instanceof ErrorType){
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

async function createPost(data: CreatePost){
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