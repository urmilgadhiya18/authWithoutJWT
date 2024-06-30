const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const restaurant=mongoose.model("restaurantModel",userSchema)
module.exports=restaurant