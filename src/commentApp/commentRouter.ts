
import express, {Router } from 'express'

const router: Router = express.Router()

import controller_funcs from './commentContoller'


router.get('/', controller_funcs.getAllComments)

router.get('user/:id', controller_funcs.getCommentsByUserId)
router.get('post/:id', controller_funcs.getCommentsByPostId)

export default router