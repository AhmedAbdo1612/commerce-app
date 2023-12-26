const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyPrser  = require('body-parser')
const cookieParser = require('cookie-parser')
const handleError = require('./utils/errorhandler.js')
const userRouter = require('./routes/userRouter.js')
const cors = require('cors')
const path = require('path')
// const fileUpload = require('express-fileupload')
const app =express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
dotenv.config()
app.use(bodyPrser.json())
app.use(bodyPrser.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/',express.static('uploads'))
// app.use(fileUpload({useTempFiles:true}))
app.use('/api/v2/user',userRouter)
const d= path.resolve()
app.use(express.static(path.join(d,"/frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(d,'frontend','build',"index.html"))
})
app.use((req,res,next)=>{
    return next(handleError("This route is not found",404))
})
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code||500).json({message:error.message||"Unknown error occured",success:false})
})



mongoose.connect(process.env.MONGO,).then(()=>{
    console.log("Database successful connection")
    app.listen(5000,()=>{
        console.log("Sever is running in 5000")
    })
}).catch((err)=>{
console.log(err)
})
