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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.create({
            data: {
                name: 'Last post',
                author: 'Me',
                date: '20.10'
            },
            include: {
                comments: true
            }
        });
        console.log(post);
    });
}
function findPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.findMany({
            where: {
                id: {
                    in: [1, 2]
                }
            }
        });
        console.log(post);
    });
}
function createPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.createMany({
            data: [{
                    name: 'First post',
                    author: 'Me',
                    date: '16.10',
                },
                {
                    name: 'Second post',
                    author: 'NotMe',
                    date: '17.10'
                }]
        });
        console.log(post);
    });
}
function deletePost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.delete({
            where: {
                id: 1
            }
        });
        console.log(post);
    });
}
function updatePost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.update({
            where: {
                id: 1
            },
            data: {
                name: 'Updated Post'
            }
        });
        console.log(post);
    });
}
function createComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.create({
            data: {
                title: 'Cool',
                body: 'Not Cool',
                img: 'No',
                postId: 4
            }
        });
        console.log(comment);
    });
}
function findComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.findUnique({
            where: {
                id: 1
            }
        });
        console.log(comment);
    });
}
function findPostWithComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.findUnique({
            where: {
                id: 1
            },
            include: {
                comments: true
            }
        });
        console.log(post);
    });
}
function findCommentsWithPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.findUnique({
            where: {
                id: 1
            },
            include: {
                Post: true
            }
        });
        console.log(comment);
    });
}
function findComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.findMany({
            where: {
                id: {
                    in: [1, 2]
                }
            }
        });
        console.log(comment);
    });
}
function createComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.createMany({
            data: [{
                    title: 'Cool',
                    body: 'Not Cool',
                    img: 'No',
                    postId: 1
                },
                {
                    title: 'Bad',
                    body: 'Not Bad',
                    img: 'Yes',
                    postId: 1
                }]
        });
        console.log(comment);
    });
}
function deleteComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.delete({
            where: {
                id: 1
            }
        });
        console.log(comment);
    });
}
function updateComment() {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield prisma.comment.update({
            where: {
                id: 1
            },
            data: {
                title: 'Ok'
            }
        });
        console.log(comment);
    });
}
function connectCommentsToPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const comments = yield prisma.comment.updateMany({
            where: {
                id: 1,
            },
            data: {
                postId: 2,
            },
        });
        console.log(comments);
    });
}
function createPostWithComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.create({
            data: {
                name: 'bebebe',
                author: 'bebebe',
                date: '25.10',
            },
            include: {
                comments: true
            }
        });
        const comments = yield prisma.comment.createMany({
            data: [
                {
                    title: 'First',
                    body: 'bebebe',
                    img: 'No',
                    postId: post.id,
                },
                {
                    title: 'Second',
                    body: 'bebebe',
                    img: 'Yes',
                    postId: post.id,
                },
            ],
        });
        console.log(post, comments);
    });
}
function findPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.findUnique({
            where: {
                id: 50
            }
        });
        console.log(post);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        findPost();
    });
}
main().then(() => {
    prisma.$disconnect();
}).catch((err) => {
    console.log(err);
    prisma.$disconnect();
});
