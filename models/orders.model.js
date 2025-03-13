import { mongoose } from 'mongoose'

let orderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true
	},
	bookId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'books',
	},
	confirmed: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.now()
	}
})

let orders = mongoose.model("orders", orderSchema)

export default orders
