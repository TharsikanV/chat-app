async function checkEmail(request,response){
    try {
        const {email}=request.body

        

    } catch (error) {
        return response.status(500).json({
            message:error.message ||error,
            error:true
        })
    }
}