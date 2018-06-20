'use strict'

const mongoose = require('mongoose'),
    User = require('../schemas/UserSchema')

class FlowerPotModel{
    getUserFlowerPots(_id){
        return new Promise( (resolve,reject) =>{
            // User.findOne({ '_id' : _id },"userFlowerPot",(err,flowerPots)=>{
            //     if(err) return reject(err)
            //     return resolve(flowerPots)
            // })
            User.findOne({ '_id' : _id })
            .populate('userFlowerPot')
            .populate('userFlowerPot.flowerPotPlant')
            .exec((err,flowerPots)=>{
                if(err) return reject(err)
                return resolve(flowerPots)
            })
        })
    }
}

module.exports = FlowerPotModel