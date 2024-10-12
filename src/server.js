"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postRouter_1 = __importDefault(require("./routers/postRouter"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
//створення експерес застосунку
//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000;
//адреса на наш комп'ютер
const HOST = 'localhost';
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'templates'));
app.use(express_1.default.json());
app.use('/static/', express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use('/posts/', postRouter_1.default);
//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "./templates/index.html"));
    console.log("ktoto zashel na stranicu");
});
app.get('/user', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "./templates/user.html"));
});
app.get('/date', (req, res) => {
    console.log((0, moment_1.default)().format('LTS'));
    res.send((0, moment_1.default)().format('LTS'));
});
const context = {
    comments: [{ id: 1, title: 'Dislike', author: "Oleg", message: "23.09" },
        { id: 2, title: 'Super cool', author: "Alex", message: "24.09" },
        { id: 3, title: 'Too bad', author: "Ne Oleg", message: "25.09" }]
};
app.get('/comments/', (req, res) => {
    res.render('comments', context);
});
//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});
