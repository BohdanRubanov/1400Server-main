import {Router} from "express" 
import regController from "./regController"
const regRouter = Router()

regRouter.post("registration", regController.registration)
regRouter.post("login", regController.login)

export default regRouter