// Получает запрос от клиента и передает его контролеру

// В целом это нужно для удобства и разделения кода, чтоб не писать всё в одном файле


import express, {Router } from 'express'

const router: Router = express.Router()
// const postController = require('../controllers/postController')

import controller_funcs from '../controllers/postController'




router.get('/', controller_funcs.getAllPosts)

router.get('/:id', controller_funcs.getPostById)

router.post('/create', controller_funcs.createPost)

export default router