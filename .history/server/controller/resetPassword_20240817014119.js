const { Error } = require("mongoose");
const UserModel = require("../models/UserModel");
const crypto = require('crypto');
const jwt=require('jsonwebtoken')

async function resetPassword(req,res,next){
    const restPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');
    //url ah paramitera vantha the hash panniddan

    const user =await UserModel.findOne({
        resetPasswordToken:restPasswordToken,
        resetPasswordTokenExpire:{
            $gt:Date.now()
        }
    })

    if(!user){
        return next(new Error('Password reset token is invalid or expired'));
    }

    if(req.body.password !=req.body.confirmPassword){
        return next(new Error('Password does not match'));
    }

    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordTokenExpire=undefined;

    await user.save({validateBeforeSave:false})

    const tokenData = {
        id : user._id,
        email : user.email 
    }

    const token=jwt.sign()

}