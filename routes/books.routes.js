import bookController from  "../controllers/books.controllers.js"
import { Router } from "express";
import multer from "multer";
import path from "path"

let route = Router()

const uploadDir = path.join(process.cwd(), 'uploads', 'books')

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
    .get("/books", bookController.getBooks)
    .get("/books/:id", bookController.getBookById)
    .post("/books", upload.single("file"), bookController.postBook)
    .put("/books/:id", bookController.updateBook)
    .delete("/books/:id", bookController.deleteBook)

export default route