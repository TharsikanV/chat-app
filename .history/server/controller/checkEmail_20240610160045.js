const UserModel = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        const {email}=request.body

        const checkEmail=await UserModel.findOne({email}).select("")

        if(!checkEmail){
            return response.status(500).json({
                message:error.message||error,
                error:true
            })
        }



    } catch (error) {
        return response.status(500).json({
            message:error.message ||error,
            error:true
        })
    }
}