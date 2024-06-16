async function checkEmail(request,response){
    try {
        const {email}=request
    } catch (error) {
        return response.status(500).json({
            message:error.message ||error,
            error:true
        })
    }
}