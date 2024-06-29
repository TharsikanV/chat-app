const { ConversationModel } = require() 

const getConversation =async (currentUserId)=>{
    if(currentUserId){

        const currentUserConversation = await ConversationModel.find({
            "$or" : [
                {sender : currentUserId},
                {receiver : currentUserId}
            ]
        }).sort({updatedAt : -1}).populate('messages').populate('sender').populate('receiver')

        const conversation = currentUserConversation.map((conv)=>{

            const countUnseenMsg = conv.messages.reduce((preve,curr)=>preve + (curr.seen ? 0 : 1),0)
            return{
                _id : conv?._id,
                sender : conv?.sender,
                receiver : conv?.receiver,
                unseenMsg : countUnseenMsg,
                lastMsg : conv.messages[conv?.messages?.length - 1]
            }
        })
           
            return conversation
    }
    else{
        return[]
    }
}

module.exports =getConversation