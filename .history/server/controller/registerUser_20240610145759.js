async function registerUser(request,response){
    try {
        const {name,email,password,profile_pic}=request
    } catch (error) {
        return response.status(500).json(
            {
                message:error.message || error,
                error:true
            }
        )
    }
}