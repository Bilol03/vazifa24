import { Router } from "express";
import bookController from  "../controllers/books.controllers.js"

let route = Router()

route
    .get("/books", bookController.getBooks)
    .get("/books/:id", bookController.getBookById)
    .post("/books", bookController.postBook)
    .put("/books/:id", bookController.updateBook)
    .delete("/books/:id", bookController.deleteBook)

export default route