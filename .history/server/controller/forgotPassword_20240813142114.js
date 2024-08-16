async function forgotPassword(req,res,next){
    const user=await User.findOne({email:req.body.email})
    if(!user){
        return next(new Error('User not found with this email',404))
    }

    const resetToken=user.getResetToken();

    
   await user.save({validateBeforeSave:false})//save pannum pothu entha validation error um varakoodathu enrathukku

    //Create reset url
    const resetUrl=`${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
    //front end kku
    //http//127.0.0.1/api/v1/password/reset/{token} muthal use pannathu

    const message=`Your password reset url is as follows \n\n
    ${resetUrl}\n\n If you have not requested this email,then ignore it.`;

    try{
        sendEmail({
            email:user.email,
            subject:"JVLcard Password Recovery",
            message //ipd kodukklaam muthalum pathirukkan ipd
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false});
        return next(new Error(error.message,500))
    }

}
module.exports=forgotPassword