const UserModel = require("../models/UserModel");

async function resetPassword(req,res,next){
    const restPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');
    //url ah paramitera vantha the hash panniddan

    const user =await UserModel.findOne({resetPasswordToken:req.body.token})

}