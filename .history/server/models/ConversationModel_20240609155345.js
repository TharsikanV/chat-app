const mongoose=require('mongoose')

const messageSchema=new 

const conversationSchema=new mongoose.Schema(
    {
        sender:{
            type:mongoose.Schema.ObjectId,
            required:true,
            ref:'User'
        },
        receiver:{
            type:mongoose.Schema.ObjectId,
            required:true,
            ref:'User'
        },
        message:[
            {
                type:mongoose.Schema.ObjectId,
                ref:'Message'
            }
        ]
    },
    {
        timestamps:true
    }
)

const conversationModel=mongoose.model('Conversation',conversationSchema)