const express=require('express')
const cors=require('cors')
require('dotenv').config()
const connectDB=require('./config/connectDB')
const router=require('./routes')

const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

const PORT =process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message:"Server running at "+PORT
    })
})
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("serer running at "+PORT)
    })
})
