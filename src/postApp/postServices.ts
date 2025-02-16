import postRepository from "./postRepository";
import { Post } from "@prisma/client";
import { CreatePost } from "./types";
import { IError, ISuccess } from '../types/types'

async function getAllPosts(): Promise< ISuccess<Post[]> | IError >{
    
    const posts = await postRepository.getAllPosts()

    if (!posts){
        return {status: 'error', message: 'post not found'};
    }
    return {status: 'success', data: posts};
}

async function getPostById(id: number): Promise< ISuccess<Post> | IError > {
    let post = await postRepository.getPostById(id)

    if (!post) {
        return {status: 'error', message: 'post not found'}
    }

    return {status: 'success', data: post}
    
}


async function createPost(data: CreatePost): Promise< ISuccess<Post> | IError >{
    let post = await postRepository.createPost(data);
    if (!post){
        return {status: "error", message: "post create error"}
    }

    return {status: "success", data: post}
}

const productService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
} 

export default productService