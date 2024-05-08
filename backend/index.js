const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
dotenv.config()

//connect to database
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error) 
    }
}

const app = express()
app.use(express.json())
app.use(cors({origin:["http://localhost:5173", "http://127.0.0.1:5173"],credentials:true}))
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log(`App is Running on port ${process.env.PORT}`)
})