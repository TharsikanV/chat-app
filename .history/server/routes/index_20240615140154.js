const express=require('express')
const registerUser=require('../controller/registerUser')

const router=express.Router()

//cretae user api
router.post('/register',registerUser)
// check user email
rot


module.exports=router