
import express, {Router } from 'express'

const router: Router = express.Router()

import controllerFuncs from './commentContoller'


router.get('/', controllerFuncs.getAllComments)

router.get('user/:id', controllerFuncs.getCommentsByUserId)
router.get('post/:id', controllerFuncs.getCommentsByPostId)

export default router