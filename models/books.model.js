import { mongoose } from 'mongoose'

let bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true, 
    },
    bookImage: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: "Uzbek"
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        min: 20,
        max: 2000,
        required: true
    },
    status: {
        type: String,
        enum: ["Mavjud", "Band"],
        default: "Mavjud"
    }
})

let books = mongoose.model("books", bookSchema)
