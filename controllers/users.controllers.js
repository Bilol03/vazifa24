import userSchema from '../models/users.model.js'

let REGISTER = async(req, res, next) => {
	try {
		let body = JSON.parse(req.body.body)
		console.log(body);
		
		body.imagePath = '/uploads/users/' + req.file.filename
		let user = await userSchema.create(body)
		console.log(user)

		res.status(201).json({ message: 'Successfully Created', data: user })
	} catch (error) {
		res.send(error)
	}
}

let LOGIN = async(req, res, next) => {
	try {
		let body = req.body
		let data = await userSchema.findOne({ email: body.email }).exec()
		
		if (!data) return res.send('Wrong email')
		if (data.password != body.password) return res.send('Wrong password')
		res.status(201).json({ message: 'Successfully logged in', data })
	} catch (error) {
		res.send(error.message)
	}
}
let PROFILE = (req, res, next) => {
	
}

export default {
	REGISTER,
	LOGIN,
	PROFILE,
}
