async function registerUser(request,response){
    try {
        const {name,email,password,profile_pic}=request.body

        const checkEmail=await UserModel.findOne({email}) //
    } catch (error) {
        return response.status(500).json(
            {
                message:error.message || error,
                error:true
            }
        )
    }
}