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
// Здесь вся логика работы с данными 
const postRepository_1 = __importDefault(require("./postRepository"));
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const context = {
            posts: yield postRepository_1.default.getAllPosts()
        };
        return context;
    });
}
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = {
            post: yield postRepository_1.default.getPostById(id)
        };
        const allPosts = yield postRepository_1.default.getAllPosts();
        if (allPosts != undefined) {
            return {
                context: context,
                length: allPosts.count
            };
        }
        else {
            console.log("No post");
        }
    });
}
function createPost(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postRepository_1.default.createPost(data);
    });
}
const service_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
};
exports.default = service_funcs;
