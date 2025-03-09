import postService from "./postServices"

import  {Request, Response } from 'express'


async function getAllPosts(req:Request, res:Response) {
    const result = await postService.getAllPosts()
    res.json(result)
    

}

async function getPostById(req:Request, res:Response){
    let id = req.params.id
    const result = await postService.getPostById(+id)
    res.json(result)
    
}

async function createPost(req:Request, res:Response){
    const data = req.body
    const result = await postService.createPost(data);
    if (result.status == 'error'){
        res.send('error')
        return
    } 
    res.send('ok')


}




const controllerFuncs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default controllerFuncs