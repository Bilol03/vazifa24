import bcrypt from 'bcryptjs'
import userSchema from '../models/users.model.js'
import jwt from 'jsonwebtoken'
let REGISTER = async (req, res, next) => {
	try {
		let body = JSON.parse(req.body.body)
		body.imagePath = '/uploads/users/' + req.file.filename
		body.password = bcrypt.hashSync(body.password, 10)

		let user = await userSchema.create(body)

		res.status(201).json({ message: 'Successfully Created', data: user })
	} catch (error) {
		res.send(error)
	}
}

let LOGIN = async (req, res, next) => {
	try {
		let body = req.body
		let data = await userSchema.findOne({ email: body.email }).exec()

		if (!data) return res.send('Wrong email')
		if (!bcrypt.compareSync(body.password, data.password)) return res.status(400).json({ message: 'Wrong password' })
		let username = data.username
		const token = jwt.sign({ username }, process.env.SECRET_KEY, {
			expiresIn: '1d'
		})
		res
			.status(201)
			.json({ message: 'Successfully logged in', data, token})
	} catch (error) {
		res.send(error.message)
	}
}
let PROFILE = (req, res, next) => {}

export default {
	REGISTER,
	LOGIN,
	PROFILE,
}
