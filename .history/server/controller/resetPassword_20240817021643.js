const { Error } = require("mongoose");
const UserModel = require("../models/UserModel");
const crypto = require('crypto');
const jwt = require('jsonwebtoken')

async function resetPassword(req, res, next) {
    try {
        console.log("USing",);
        const restPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
        //url ah paramitera vantha the hash panniddan
        console.log("USing",restPasswordToken);
        const user = await UserModel.findOne({
            resetPasswordToken: restPasswordToken,
            resetPasswordTokenExpire: {
                $gt: Date.now()
            }
        })
        

        if (!user) {
            return next(new Error('Password reset token is invalid or expired',404));
        }

        if (req.body.password != req.body.confirmPassword) {
            return next(new Error('Password does not match'));
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;

        await user.save({ validateBeforeSave: false })

        return res.status(200).json({
            message: "password reseted successfully",
            success: true
        })

        // const tokenData = {
        //     id: user._id,
        //     email: user.email
        // }

        // const token = jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, { expiresIn: '1d' });

        // const cookieOptions = {
        //     http: true,
        //     secure: true
        // }

        // return res.cookie('token', token, cookieOptions).status(200).json({
        //     message: "Login successfully",
        //     token: token,
        //     success: true
        // })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }


}

module.exports = resetPassword