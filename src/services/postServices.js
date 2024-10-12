"use strict";
// Здесь вся логика работы с данными 
Object.defineProperty(exports, "__esModule", { value: true });
const posts = [{ id: 1, name: 'Post1', author: "Author1", date: "23.09" },
    { id: 2, name: 'Post2', author: "Author2", date: "24.09" },
    { id: 3, name: 'Post3', author: "Author3", date: "25.09" }];
function getAllPosts() {
    const context = {
        posts: posts
    };
    return context;
}
function getPostById(id) {
    const context = {
        post: posts[id - 1]
    };
    return {
        context: context,
        length: posts.length
    };
}
function createPost(data) {
    posts.push(data);
}
const service_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
};
exports.default = service_funcs;
