import { mongoose } from 'mongoose'

let userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		maxLength: 20,
		minLength: 4,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},

	password: {
		type: String,
		minLength: 8,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
})

let users = mongoose.model('users', userSchema)

export default users
