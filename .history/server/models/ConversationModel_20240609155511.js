const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema(
    {
        text:{
            type:String,
            default:''
        }
    }
)

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