const express = require("express");
const connect = require('./config/db')
const shoesModel = require('./models/shoes.model')
const app = express();
const {signup,login} = require('./controllers/User.controller')
const {body,validationResult} = require('express-validator')





app.use(express.json());
app.use('/signup',
body('username').notEmpty().isString().isLength({min:3,max:20}),
body('email').isEmail().notEmpty(),
body('password').isLength({min:5,max:20})

,signup)
app.use('/login',
    body('username').notEmpty().isString().isLength({min:3,max:20}),
    body('email').isEmail().notEmpty(),
    body('password').isLength({min:5,max:20})
,login)

app.get('/shoes',async(req,res)=>{

        try{
            const shoes = await shoesModel.find().limit(50).lean().exec();
            res.send(shoes)
        }catch(err){
           console.log(err)                 
        }
})


app.listen(3434,async()=>{

    try{    await connect()
        console.log('Server Started on 3434')
    }catch(err){
            console.log(err)
    }
})