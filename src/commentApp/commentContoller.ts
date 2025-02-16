import commentService from "./commentService"

import {Request, Response } from 'express'


async function getAllComments(req:Request, res:Response) {
    const context = await commentService.getAllComments()
    if (context.status == "error"){
        res.send("error")
        return
    } 
    res.json({comments: context.data})
    

}

async function getCommentsByUserId(req:Request, res:Response){
    let id = req.params.id
    const result = await commentService.getCommentsByUserId(+id)
    if (result.status == "error"){
        res.send("ban")
        return
    } 
    res.json(result.data)
    
}
async function getCommentsByPostId(req:Request, res:Response){
    let id = req.params.id
    const result = await commentService.getCommentsByPostId(+id)
    if (result.status == "error"){
        res.send("ban")
        return
    } 
    res.json(result.data)
    
}





const controller_funcs = {
    getAllComments: getAllComments,
    getCommentsByUserId: getCommentsByUserId,
    getCommentsByPostId: getCommentsByPostId,
}

export default controller_funcs