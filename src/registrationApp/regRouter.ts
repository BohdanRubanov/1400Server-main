import {Router} from "express" 
import regController from "./regController"
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware"
const regRouter = Router()

regRouter.post("registration", regController.registration)
regRouter.post("login", regController.login)
regRouter.get('/me', authTokenMiddleware,regController.getUserById);

export default regRouter