async function checkEmail(request,response){
    try {
        
    } catch (error) {
        return response.status(500).json({
            message:error.message ||error
        })
    }
}