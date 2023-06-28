const connectDB = require("./config/db")
const app = require('./app')
// require("dotenv").config({path:'backend/.env'});



connectDB();


const server = app.listen(4000,()=>{
    console.log(`server is runnning`)
})