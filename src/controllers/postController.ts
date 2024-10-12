// Обрабатывает запрос и формирует ответ

import express, { Express, Request, Response } from 'express'

// const postService = require('../services/postServices')

import service_funcs from '../services/postServices'

function getAllPosts(req: Request, res: Response) {
    const context = service_funcs.getAllPosts()
    res.render('posts', context)
}

function getPostById(req: Request, res: Response){
    console.log(req.params.id)
    const id = Number(req.params.id)
    const data = service_funcs.getPostById(id)
    if (id <= data.length){
        res.render('post', data.context)
    } else{
        res.send("ban")
    }
}

function createPost(req: Request, res: Response){
    if (res.statusCode === 200){
        const data = req.body
        service_funcs.createPost(data);
        console.log('Всё супер')
    }else{
        console.log('Всё плоха')
    }

}


const controller_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}

export default controller_funcs
