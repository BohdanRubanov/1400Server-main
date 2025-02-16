import commentRepository from "./commentRepository";
import {Comment } from "@prisma/client";
import { IError, ISuccess } from '../types/types'

async function getAllComments(): Promise< ISuccess<Comment[]> | IError >{
    
    const comments = await commentRepository.getAllComments()

    if (!comments){
        return {status: 'error', message: 'comment not found'};
    }
    return {status: 'success', data: comments};
}

async function getCommentsByUserId(id: number): Promise< ISuccess<Comment[]> | IError > {
    let comments = await commentRepository.getCommentsByUserId(id)

    if (!comments) {
        return {status: 'error', message: 'comments not found'}
    }

    return {status: 'success', data: comments}
    
}
async function getCommentsByPostId(id: number): Promise< ISuccess<Comment[]> | IError > {
    let comments = await commentRepository.getCommentsByPostId(id)

    if (!comments) {
        return {status: 'error', message: 'comments not found'}
    }

    return {status: 'success', data: comments}
    
}




const controller_funcs = {
    getAllComments: getAllComments,
    getCommentsByUserId: getCommentsByUserId,
    getCommentsByPostId: getCommentsByPostId,
} 

export default controller_funcs