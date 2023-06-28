const mongoose = require('mongoose')


const connectDB = async() =>{
    try {
    mongoose.connect("mongodb://127.0.0.1:27017/CRUD?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.0")
        console.log("connect to db")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB