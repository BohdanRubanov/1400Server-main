//підключає бібліотеку експрес
const express = require('express')
const moment = require('moment')
//створення експерес застосунку
const app = express()
//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'
//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', (req, res) => {
    console.log("ktoto zashel na stranicu")
})
app.get('/date', (req, res) => {
    console.log(moment().format('LTS'))
    
    res.send(moment().format('LTS'))
})
//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})