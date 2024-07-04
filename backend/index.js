const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const cors=require("cors")

const appp=express()
const app=express()

const router=require("./Routes/Route")
const routerp=require("./Routes/savepr")
const port=process.env.PORT || 9000
const portp=process.env.PORT1 || 1000
//Middleware


app.use(express.json())
app.use(cors())
appp.use(express.json())
appp.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected.....")
})
.catch((err)=>{
    console.log(err)
})
app.use("/api",router)
appp.use("/api",routerp)
app.listen(port,()=>{
    console.log(`listening.....${port}`)
})
appp.listen(portp,()=>{
    console.log(`listening.....${portp}`)
})

