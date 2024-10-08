// Обрабатывает запрос и формирует ответ


const postService = require('../services/postServices')

function getAllPosts(req, res) {
    const context = postService.getAllPosts()
    res.render('posts', context)
}

function getPostById(req, res){
    console.log(req.params.id)
    const id = req.params.id
    const data = postService.getPostById(id)
    if (id <= data.length){
        res.render('post', data.context)
    } else{
        res.send("ban")
    }
}

function createPost(req, res){
    if (res.statusCode === 200){
        const data = req.body
        postService.createPost(data);
        console.log('Всё супер')
    }else{
        console.log('Всё плоха')
    }

}


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}