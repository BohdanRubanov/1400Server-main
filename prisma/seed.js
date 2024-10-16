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
                name: 'First post',
                author: 'Me',
                date: '16.10'
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
function findProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield prisma.post.findUnique({
            where: {
                id: 1
            }
        });
        console.log(post);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createPosts();
        // await findProduct()
        // await updateProduct()
        // await deleteProduct()
    });
}
main().then(() => {
    prisma.$disconnect();
}).catch((err) => {
    console.log(err);
    prisma.$disconnect();
});
