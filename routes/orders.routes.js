import { Router } from 'express'
import orderController from '../controllers/orders.controllers.js'

let route = Router()

route
    .get('/requests', orderController.getOrders)
    .get("/my-borrows/:id", orderController.getMyBorrows)
    .post("/orders/:bookId", orderController.postOrder)
    .put("/requests/:requestId", orderController.updateOrderStatus)

export default route