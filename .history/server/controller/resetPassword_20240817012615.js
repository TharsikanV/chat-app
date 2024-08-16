const UserModel = require("../models/UserModel");

async function resetPassword(req,res,next){
    const restPasswordToken=cry.createHash('sha256').update(req.params.token).digest('hex');
    //url ah paramitera vantha the hash panniddan

    const user =await UserModel.findOne({
        resetPasswordToken:restPasswordToken,
        resetPasswordTokenExpire:{
            $gt:Date.now()
        }
    })



}