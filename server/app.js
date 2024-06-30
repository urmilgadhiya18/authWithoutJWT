const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const  restaurant=require('./model')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/restaurantData')

app.post('/signup',(req,res)=>{
    restaurant.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post('/signin',(req,res)=>{
    const {email,pass}=req.body
    restaurant.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.pass===pass){
                res.json("Success")
            }else{
                res.json('Wrong Password')
            }
        }
        else{
            res.json("Invalid Email or Password")
        }
    })
})

port=4004
app.listen(port,()=>{
    console.log(`server is running from port ${port}`);
})