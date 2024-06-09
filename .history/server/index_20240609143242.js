const express=require('express')
const cors=require('cors')
require

const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL
}))