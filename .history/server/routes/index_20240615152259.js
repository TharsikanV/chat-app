const express=require('express')
const registerUser=require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')

const router=express.Router()

//cretae user api
router.post('/register',registerUser)
// check user email
router.post('/email',checkEmail)
// check user password
router.post('/password',checkPassword)
// login user details
router.get('/user-details',userDetails)
// logout user
router.get('/logout',logout)
// update user details
router.post('update-')

module.exports=router