import { mongoose } from 'mongoose'

let orderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true
	},
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'books',
	},
	orderStatus: {
		type: String,
		enum: ['Pending', 'Borrowed', 'Returned'],
		default: 'Pending',
	},
	date: {
		type: Date,
		default: Date.now()
	}
})

let orders = mongoose.model("orders", orderSchema)

export default orders
