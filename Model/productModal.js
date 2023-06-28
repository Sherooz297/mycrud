const mongoose = require('mongoose')

const productModal = new mongoose.Schema({
    name:String,
    description:String,
    price:String
})

module.exports = mongoose.model("product",productModal)