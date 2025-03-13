import bookSchema from '../models/books.model.js'

let getBooks = async (req, res, next) => {
	let datas = await bookSchema.find()
	res.status(200).json({ message: 'Success', datas })
}

let getBookById = async(req, res, next) => {
    let id = req.params.id
    let data = await bookSchema.findById(id)
    if(!data) return res.send("User not found")
    res.send(data)
}
let postBook = async (req, res, next) => {
    let body = JSON.parse(req.body.body)
    body.bookImage = "/uploads/books/" + req.file.filename
    console.log(body)
    let data = await bookSchema.create(body)
    res.status(201).json(data)
}
let updateBook = async(req, res, next) => {
    let data = await bookSchema.findByIdAndUpdate(req.params.id, req.body)
    res.status(203).json({ message: "success", data})
    
}
let deleteBook = async(req, res, next) => {
    let data = await bookSchema.findByIdAndDelete(req.params.id)
    res.status(203).json({ message: "success", data})
}

export default {
	getBooks,
	getBookById,
	postBook,
	updateBook,
	deleteBook,
}
