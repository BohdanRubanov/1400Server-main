"use strict";
// Получает запрос от клиента и передает его контролеру
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// В целом это нужно для удобства и разделения кода, чтоб не писать всё в одном файле
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const postController = require('../controllers/postController')
const postController_1 = __importDefault(require("./postController"));
router.get('/', postController_1.default.getAllPosts);
router.get('/:id', postController_1.default.getPostById);
router.post('/create', postController_1.default.createPost);
exports.default = router;
