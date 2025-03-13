import userSchema from '../models/users.model.js'

let REGISTER = (req, res, next) => {}
let LOGIN = (req, res, next) => {
	let body = req.body
	let data = userSchema.findOne({ email: body.email })
	if (!data) return res.send('Wrong email')
	if (data.password !== body.password) return res.send('Wrong password')
	res.status(201).json({ message: 'Successfully logged in' })
}
let PROFILE = (req, res, next) => {}

export default {
	REGISTER,
	LOGIN,
	PROFILE,
}
