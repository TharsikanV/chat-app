async function searchUser(request,response){
    try {
        const {search}=request.body

        const query=new RegExp
        
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}