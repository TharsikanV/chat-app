const UserModel=require('../models/UserModel')

async function searchUser(request,response){
    try {
        const {search}=request.body

        const query=new RegExp(search,"i","g")

        const user=await UserModel.find({
            "$or":[
                {name:query},
                {email:query}
            ]
        })

        return response.json({
            message:'all user',
            data:user,
            suc
        })
        
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}