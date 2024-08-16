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
userSchema.methods.getResetToken=function(){
    //Generate Token 
    const token=cry.randomBytes(20).toString('hex');//hexadecimal encoding kodithiruuku

    //Generate Hash and set to resetPasswordToken
   this.resetPasswordToken=crypto.createHash('sha256').update(token).digest('hex');
    //hashing algorithm 'sha256'

    //set token expire time
    this.resetPasswordTokenExpire=Date.now()+30*60*1000;

    return token
}

const UserModel=mongoose.model('User',userSchema)

module.exports=UserModel