const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"provide name"]
        },
        email:{
            type:String,
            required:[true,"provide email"],
            unique
        }
    }
)