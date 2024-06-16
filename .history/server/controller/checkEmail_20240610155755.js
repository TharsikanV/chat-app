async function checkEmail(request,response){
    try {
        const {email}=request.body

        const checkEmail=await UserMode.findOne({email}) //{name,email} //null

    } catch (error) {
        return response.status(500).json({
            message:error.message ||error,
            error:true
        })
    }
}