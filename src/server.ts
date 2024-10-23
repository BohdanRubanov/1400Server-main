

import router from './postApp/postRouter'

import express, { Express, Request, Response } from 'express'

import path from 'path'

import moment from 'moment'

const app: Express = express()
//створення експерес застосунку

//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))
app.use(express.json()) 


app.use('/static/', express.static(path.join(__dirname, 'static'))) 
app.use('/posts/', router)

//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    console.log("ktoto zashel na stranicu")
})
app.get('/user', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "./templates/user.html"))
})
app.get('/date', (req: Request, res: Response) => {
    console.log(moment().format('LTS'))
    
    res.send(moment().format('LTS'))
})

const context ={
    comments: [{id: 1, title: 'Dislike', author: "Oleg", message: "23.09"}, 
                {id: 2, title: 'Super cool', author: "Alex", message: "24.09"}, 
                {id: 3, title: 'Too bad', author: "Ne Oleg", message: "25.09"}]
}




app.get('/comments/', (req: Request, res: Response) => {
    res.render('comments', context)
})




//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})