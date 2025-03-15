import ordersSchema from "../models/orders.model.js"

let getOrders = async (req, res) => {
    let orders = await ordersSchema.find()
    console.log(orders)
}
let getMyBorrows =  async(req, res) => {
    
    let datas = await ordersSchema.find({userId: req.params.id})
    console.log(datas);
    
    res.status(200).json({message: "Success", datas})
}
let postOrder = async(req, res) => {
    let body = req.body
    body.bookId = req.params.bookId
    let data = await ordersSchema.create(body)

    res.status(200).json({message: "Success", data})
}
let updateOrderStatus =  async(req, res) => {
    let id = req.params.requestId
    console.log(id);
    let body = {}
    body.confirmed = req.body.confirmed ? req.body.confirmed : null
    if(!body.confirmed ) return res.send({message: "Not valid body"})
    let data = await ordersSchema.findByIdAndUpdate(id, {confirmed: body.confirmed})
    
    if(!data) return res.status(404).json({message: "Data not found"})
    
    res.status(203).json({message: "Successfully updated", data})
}

export default {
    getOrders, 
    getMyBorrows,
    postOrder,
    updateOrderStatus
}
