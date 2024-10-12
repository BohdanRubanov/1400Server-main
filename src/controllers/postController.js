"use strict";
// Обрабатывает запрос и формирует ответ
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const postService = require('../services/postServices')
const postServices_1 = __importDefault(require("../services/postServices"));
function getAllPosts(req, res) {
    const context = postServices_1.default.getAllPosts();
    res.render('posts', context);
}
function getPostById(req, res) {
    console.log(req.params.id);
    const id = Number(req.params.id);
    const data = postServices_1.default.getPostById(id);
    if (id <= data.length) {
        res.render('post', data.context);
    }
    else {
        res.send("ban");
    }
}
function createPost(req, res) {
    if (res.statusCode === 200) {
        const data = req.body;
        postServices_1.default.createPost(data);
        console.log('Всё супер');
    }
    else {
        console.log('Всё плоха');
    }
}
const controller_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
};
exports.default = controller_funcs;
