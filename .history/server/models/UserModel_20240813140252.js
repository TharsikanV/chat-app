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
            unique:true
        },
        password:{
            type:String,
            required:[true,"provide password"]
        },
        profile_pic:{
            type:String,
            default:""
        },
        resetPasswordToken:String,
        resetPasswordTokenExpire:Date,
    },
    {
        timestamps:true //It automatically adds two fields to your schema: createdAt and updatedAt
    }
)

const UserModel=mongoose.model('User',userSchema)

module.exports=UserModel