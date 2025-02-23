import { Router } from "express";
import tagController from './tagController'

const tagRouter = Router()

tagRouter.get('/all', tagController.getAllTags)

export default tagRouter