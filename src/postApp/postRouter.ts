// Получает запрос от клиента и передает его контролеру

// В целом это нужно для удобства и разделения кода, чтоб не писать всё в одном файле

// import { authMiddleware } from '../middlewares/authMiddleware'
// import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'

import express, {Router } from 'express'

const router: Router = express.Router()

import controllerFuncs from './postController'


router.get('/', controllerFuncs.getAllPosts)

router.get('/:id', controllerFuncs.getPostById)

router.post('/create', controllerFuncs.createPost)

export default router