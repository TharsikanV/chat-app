const getResetToken=function(){
    //Generate Token 
    const token=crypto.randomBytes(20).toString('hex');//hexadecimal encoding kodithiruuku

    //Generate Hash and set to resetPasswordToken
   this.resetPasswordToken=crypto.createHash('sha256').update(token).digest('hex');
    //hashing algorithm 'sha256'

    //set token expire time
    this.resetPasswordTokenExpire=Date.now()+30*60*1000;

    return token
}
module.exports=getResetToken