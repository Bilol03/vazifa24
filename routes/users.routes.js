import userController from '../controllers/users.controllers.js'
import { Router } from 'express'
import multer from 'multer'
import path from "path"

let route = Router()

const uploadDir = path.join(process.cwd(), 'uploads', 'users')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir)
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname),
		)
	},
})

const upload = multer({ storage: storage })

route
	.post('/register', upload.single('file'), userController.REGISTER)
	.post('/login', userController.LOGIN)
	.get('/profile', userController.PROFILE)


export default route