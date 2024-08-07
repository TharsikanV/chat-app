const express=require('express')
const registerUser=require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')

const router=express.Router()

//cretae user api
router.post('/register',registerUser)
// check user email
router.post('/email',checkEmail)
// check user password
router.post('/password')

module.exports=router