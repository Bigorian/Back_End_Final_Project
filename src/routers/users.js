const express = require('express')

const router = express.Router()
const UsersModel = require('../models/users')
ObjectId = require('mongoose').Types.ObjectId;


router.get('/',async (req,res)=>{
    const users = await UsersModel.find();
    res.send(users.map((users)=> users.toJSON()))
})


//User Profile (get)
router.get('/:user/information',async (req,res)=>{
    console.log(req.params)
    const findUser = await UsersModel.findOne({_id:ObjectId(req.params.user)})
    const newFindUser = {
        "_id":findUser._id,
        "username":findUser.username,
        "age":findUser.age,
        "weight":findUser.weight,
        "height":findUser.height,
        "bmi":findUser.bmi,
        "__v":findUser.__v,
    }
        
        
    res.send(findUser)
})
    
// /:user/information
// /big/information








module.exports = router
    
    
    
    


