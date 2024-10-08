// Получает запрос от клиента и передает его контролеру

// В целом это нужно для удобства и разделения кода, чтоб не писать всё в одном файле



const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


router.get('/', postController.getAllPosts)

router.get('/:id', postController.getPostById)

router.post('/create', postController.createPost)

module.exports = router