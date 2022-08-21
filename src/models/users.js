const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        id: {type:Number},
        username:{type:String},
        age:{type:Number},
        weight:{type:Number},
        height:{type:Number},
        bmi:{type:Number},
        password:{type:String , select:false}

    }
)

const UsersModel = mongoose.model('username_tests',usersSchema)

module.exports = UsersModel