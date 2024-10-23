// Здесь вся логика работы с данными 
import postRepository from "./postRepository";
import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';



async function getAllPosts(){
    
    const context = {
        posts: await postRepository.getAllPosts()
    }
    
    return context
}

async function getPostById(id: number){
    const data = await postRepository.getPostById(id)

    if (data.status == 'error' || data.status == 'error'){
        return {
                    status: 'error',
                    message: 'not found',
                }}
    console.log(data)

        
    return {
        context: data.post,
        message: data.message,
        status: data.status
    }}
    


async function createPost(data: Prisma.PostCreateInput){
    await postRepository.createPost(data)
}

const service_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
} 

export default service_funcs