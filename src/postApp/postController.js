"use strict";
// Обрабатывает запрос и формирует ответ
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const postService = require('../services/postServices')
const postServices_1 = __importDefault(require("../postApp/postServices"));
function getAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = yield postServices_1.default.getAllPosts();
        res.render('posts', context.posts);
    });
}
function getPostById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.params.id);
        const id = Number(req.params.id);
        const data = yield postServices_1.default.getPostById(id);
        if (data.status == 'not found') {
            res.send("post not found");
        }
        if (data.status == 'success') {
            res.render('post', { post: data.context });
        }
    });
}
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        yield postServices_1.default.createPost(data);
        console.log('Всё супер');
    });
}
const controller_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
};
exports.default = controller_funcs;
