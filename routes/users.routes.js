import { Router } from 'express'
import userController from '../controllers/users.controllers.js'
let route = Router()

route
	.post('/register', userController.REGISTER)
	.post('/login', userController.LOGIN)
	.get('/profile', userController.PROFILE)
