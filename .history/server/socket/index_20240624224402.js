const express=require('express')
const {Server}=require('socket.io')
const http=require('http')

const app=express()

// socket connection
const server=http.createServer(app)
const io=new Server(server,{
    cors :{
        origin:process.env.FRONTEND_URL,
        credentials:true
    }
})

// socket running at http://localhost:8080/

io.on('connection',(socket)=>{
    console.log("connect User",socket.id)

    const 


    // disconnect
    io.on('disconnect',()=>{
        console.log('disconnect user',socket.id)
    })
})

module.exports={
    app,
    server
}