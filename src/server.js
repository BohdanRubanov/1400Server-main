//підключає бібліотеку експрес
const express = require('express')
const moment = require('moment')
const path = require('path')
//створення експерес застосунку
const app = express()
//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))



app.use('/static/', express.static(path.join(__dirname, 'static'))) 

//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    console.log("ktoto zashel na stranicu")
})
app.get('/date', (req, res) => {
    console.log(moment().format('LTS'))
    
    res.send(moment().format('LTS'))
})



app.get('/posts', (req, res) => {

    const context ={
        posts: [{name: 'post1', author: "Author1"}, {name: 'post2', author: "Author2"}, {name: 'post3', author: "Author3"}]
    }

    res.render('posts', context)
})



//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})