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
    const context = {
        post: await postRepository.getPostById(id)
    }
    const allPostsLenght = await postRepository.getPostCount()

    // if (!allPostsLenght.count){
    //     return {
    //         status: 'not found',
    //         message: 'error',
    //     }}
    
    // if(!context.post){
    //     return {
    //         status: 'not found',
    //         message: 'Posts not found',
    //         length: 0
    //     }}

    if (context.post?.status == 'not found' || context.post?.status == 'error'){
        return {
                    status: 'not found',
                    message: 'not found',
                }}
    if (allPostsLenght.status == 'not found' || allPostsLenght.status == 'error'){
        return {
                    status: 'not found',
                    message: 'not found',
                }}
        
    return {
        context: context.post,
        length: allPostsLenght.count,
        message: context.post.message,
        status: context.post.status
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