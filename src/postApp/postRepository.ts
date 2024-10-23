import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';


async function getPostCount(){
    try{

        let count = await client.post.count()
        if (!count){
            return {
                status: 'not found',
                message: 'Posts not found',
            }}
        
        return {

            status: 'success',
            message: 'Posts successfully found',
            count: count,
            }


        }catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
            

    }
    return {
        status: 'error',
        message: 'error',
    }
        }
}

async function getAllPosts(){
    try{
        let posts = await client.post.findMany({
        
        })
        if (!posts) {
            return {
                status: 'not found',
                message: 'Posts not found',
            }}
        return{
            status: 'success',
            message: 'Posts successfully found',
            posts: posts,
        }
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
    }}
}

async function getPostById(id: number){
    try{
    let post = await client.post.findUnique({
        where:{
            id: id
        }
    
    })
    if (!post) {
        return {
            status: 'not found',
            message: 'Post not found',
            data: null
        }}
    return {
        status: 'success',
        message: 'Posts successfully found',
        post: post
    }
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
    }}

}


async function createPost(data: Prisma.PostCreateInput){
    try{
    let post = await client.post.create({
        data: data
    })
    if (!post) {
        return {
            status: 'not found',
            message: 'Post not found',
            data: null
        }}
    return {
        status: 'success',
        message: 'Posts successfully found',
        post: post
    }
    }catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
    }}
}  


const postRepository = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createPost:createPost,
    getPostCount:getPostCount
}
export default postRepository