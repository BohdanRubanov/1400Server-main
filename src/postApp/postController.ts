// Обрабатывает запрос и формирует ответ

import express, { Express, Request, Response } from 'express'

// const postService = require('../services/postServices')

import service_funcs from '../postApp/postServices'

async function getAllPosts(req: Request, res: Response) {
    const context = await service_funcs.getAllPosts()
    res.render('posts', context.posts)
}

async function getPostById(req: Request, res: Response){
    console.log(req.params.id)
    const id = Number(req.params.id)
    const data = await service_funcs.getPostById(id)
    if (data.status == 'error'){
        res.send("post not found")
    }
    if (data.status == 'success'){
        res.render('post', {post: data.context})
    }

}

async function createPost(req: Request, res: Response){
   
        const data = req.body
        await service_funcs.createPost(data);
        console.log('Всё супер')

}


const controller_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}

export default controller_funcs
