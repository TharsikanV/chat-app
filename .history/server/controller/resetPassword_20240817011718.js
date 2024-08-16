const UserModel = require("../models/UserModel");

async function resetPassword(req,res,next){
    const user =await UserModel.findOne({resetPasswordToken:req.body.token})
    
}