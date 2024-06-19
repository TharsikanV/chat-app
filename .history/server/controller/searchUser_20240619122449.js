async function searchUser(request,response){
    try {
        const {search}=req
        
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}