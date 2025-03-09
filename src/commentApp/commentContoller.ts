import commentService from "./commentService"

import {Request, Response } from 'express'


async function getAllComments(req:Request, res:Response) {
    const result = await commentService.getAllComments()
    res.json(result)
    

}

async function getCommentsByUserId(req:Request, res:Response){
    let id = req.params.id
    const result = await commentService.getCommentsByUserId(+id)
    res.json(result)
    
}
async function getCommentsByPostId(req:Request, res:Response){
    let id = req.params.id
    const result = await commentService.getCommentsByPostId(+id)
    res.json(result)
    
}





const controllerFuncs = {
    getAllComments: getAllComments,
    getCommentsByUserId: getCommentsByUserId,
    getCommentsByPostId: getCommentsByPostId,
}

export default controllerFuncs