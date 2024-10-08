const express=require('express')
const {Server}=require('socket.io')
const http=require('http')
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')
const UserModel = require('../models/UserModel')
const { profile } = require('console')
const { ConversationModel } = require('../models/ConversationModel')

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


// online user
const onlineUser=new Set()

io.on('connection',async (socket)=>{
    console.log("connect User",socket.id)

    const token=socket.handshake.auth.token

    // current user details
    const user=await getUserDetailsFromToken(token)

    // create a room 
    socket.join(user?._id)
    onlineUser.add(user?._id?.toString())

    io.emit('onlineUser',Array.from(onlineUser))

    socket.on('message-page',async (userId)=>{
        console.log('userId',userId)
        const userDetails=await UserModel.findById(userId).select("-password")

        const payload={
            _id:userDetails?._id,
            name:userDetails?.name,
            email:userDetails?.email,
            profile_pic:userDetails?.profile_pic,
            online:onlineUser.has(userId)
        }
        socket.emit('message-user',payload)
    })

    // new message
    socket.on('new message',async (data)=>{

        // check conversation is available both user
        const conversation=await ConversationModel.findOne({
            ""
        })

        console.log('new messge',data)
    })

    // disconnect
    socket.on('disconnect',()=>{
        onlineUser.delete(user?._id)//user ah delete pannanum 
        console.log('disconnect user',socket.id)
    })
})

module.exports={
    app,
    server
}