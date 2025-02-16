import postService from "./postServices"

import  {Request, Response } from 'express'


async function getAllPosts(req:Request, res:Response) {
    const context = await postService.getAllPosts()
    if (context.status == "error"){
        res.send("error")
        return
    } 
    res.render('posts', {posts: context.data})
    

}

async function getPostById(req:Request, res:Response){
    let id = req.params.id
    const result = await postService.getPostById(+id)
    if (result.status == "error"){
        res.send("ban")
        return
        
    } 
    res.render('post', result.data)
    
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




const controller_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default controller_funcs