const express = require('express');
const {default: mongoose} = require('mongoose')
const app = express()
const usersRouter = require('./src/routers/users')
const PORT = 8080;
const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use('/users',usersRouter)

const start= async ()=>{
    await mongoose.connect(
        'mongodb+srv://m001-student:01478852@sandbox.ctkei.mongodb.net/',{dbName: "final_db_test"}
      );

    await app.listen(PORT,()=>{
        console.log("Hello")    
    })
}

start().catch(err=> console.log(err))