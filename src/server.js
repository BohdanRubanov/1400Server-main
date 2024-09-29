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
app.get('/user', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/user.html"))
})
app.get('/date', (req, res) => {
    console.log(moment().format('LTS'))
    
    res.send(moment().format('LTS'))
})

const context ={
    posts: [{id: 1, name: 'post1', author: "Author1", date: "23.09"}, 
            {id: 2, name: 'post2', author: "Author2", date: "24.09"}, 
            {id: 3, name: 'post3', author: "Author3", date: "25.09"}]
}

app.get('/posts', (req, res) => {

    
    res.render('posts', context)
})


app.get('/post/:id', (req, res) => {
    const url_id = req.params.id
    const post_by_id = context.posts[url_id - 1]
    res.render('post', post_by_id)
})




//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})