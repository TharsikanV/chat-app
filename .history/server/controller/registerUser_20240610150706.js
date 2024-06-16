const UserModel=require("../models/UserModel")
const bcryptjs=require('bcryptjs')

async function registerUser(request,response){
    try {
        const {name,email,password,profile_pic}=request.body

        const checkEmail=await UserModel.findOne({email}) //{name,email} //null

        if(checkEmail){
            return response.status(400).json({
                message:"Already user exits",
                error:true
            })
        }

        //password into hashpasword
        const salt =await bcryptjs.genSalt(10)
        const hashpassword=await bcryptjs.hash(password,salt)

        
    } catch (error) {
        return response.status(500).json(
            {
                message:error.message || error,
                error:true
            }
        )
    }
}