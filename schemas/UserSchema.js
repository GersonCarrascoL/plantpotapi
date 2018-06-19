'use strict'

const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    FlowerPotSchema = require('./FlowerPotSchema')

mongoose.Promise = Promise

let UserSchema = new mongoose.Schema({
    userName : String,
    userLastName : String,
    userEmail : { type:String,required:true,unique:true},
    userPassword:{ type: String, required:true},
    userDocumentNumber : { type: Number , required:true },
    userStatus: { type:Number, default:1 },
    userFlowerPot: [{ type:mongoose.Schema.Types.ObjectId, ref:'FlowerPotSchema'}]
})

UserSchema.pre('save',function(next){
    let user = this
    if(!user.isModified('userPassword')) return next()
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next()
        bcrypt.hash(user.userPassword,salt,function(error,hash){
            if(error) return next(error)
            user.userPassword = hash
            next()
        })  
    })
})

module.exports = mongoose.model('User',UserSchema,'user')