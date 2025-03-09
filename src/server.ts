import cookieParser from 'cookie-parser'
import postRouter from './postApp/postRouter'
import regRouter from './registrationApp/regRouter'
import commentRouter from './commentApp/commentRouter'
import tagRouter from './tagApp/tagRouter'
import express, { Express, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'

const app: Express = express()
//створення експерес застосунку

//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))
app.use(express.json()) 
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 
app.use('/posts/', postRouter)
app.use('/', regRouter)
app.use('/tags', tagRouter)
app.use('/comments', commentRouter)


//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})