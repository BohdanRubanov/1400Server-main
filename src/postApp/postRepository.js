"use strict";
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
const client_1 = require("@prisma/client");
const prismaClient_1 = __importDefault(require("../client/prismaClient"));
function getPostCount() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let count = yield prismaClient_1.default.post.count();
            if (!count) {
                return {
                    status: 'not found',
                    message: 'Posts not found',
                };
            }
            return {
                status: 'success',
                message: 'Posts successfully found',
                count: count,
            };
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code == 'P2002') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2015') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2019') {
                    console.log(err.message);
                    throw err;
                }
            }
            return {
                status: 'error',
                message: 'error',
            };
        }
    });
}
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let posts = yield prismaClient_1.default.post.findMany({});
            if (!posts) {
                return {
                    status: 'not found',
                    message: 'Posts not found',
                };
            }
            return {
                status: 'success',
                message: 'Posts successfully found',
                posts: posts,
            };
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code == 'P2002') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2015') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2019') {
                    console.log(err.message);
                    throw err;
                }
            }
        }
    });
}
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let post = yield prismaClient_1.default.post.findUnique({
                where: {
                    id: id
                }
            });
            if (!post) {
                return {
                    status: 'error',
                    message: 'Post not found',
                    data: null
                };
            }
            return {
                status: 'success',
                message: 'Posts successfully found',
                post: post
            };
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code == 'P2002') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2015') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2019') {
                    console.log(err.message);
                    throw err;
                }
            }
            return {
                status: 'error',
                message: 'error',
            };
        }
    });
}
function createPost(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let post = yield prismaClient_1.default.post.create({
                data: data
            });
            if (!post) {
                return {
                    status: 'not found',
                    message: 'Post not found',
                    data: null
                };
            }
            return {
                status: 'success',
                message: 'Posts successfully found',
                post: post
            };
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code == 'P2002') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2015') {
                    console.log(err.message);
                    throw err;
                }
                else if (err.code == 'P2019') {
                    console.log(err.message);
                    throw err;
                }
            }
        }
    });
}
const postRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getPostCount: getPostCount
};
exports.default = postRepository;
