const UserModel=require('../models/UserModel')

async function searchUser(request,response){
    try {
        const {search}=request.body

        const query=new RegExp(search,"i","g")

        const user=await UserModel.find({
            "$or":[
                
            ]
        })
        
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}