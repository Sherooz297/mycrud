const connectDB = require("./config/db")
const app = require('./app')
require("dotenv").config({path:'backend/.env'});



connectDB();


const server = app.listen(process.env.PORT,()=>{
    console.log("server is runing...")
})