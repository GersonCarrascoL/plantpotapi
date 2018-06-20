'use strict'

const mongoose = require('mongoose')

mongoose.Promise = Promise

let FlowerPotSchema = new mongoose.Schema({
    flowerPotCode: String,
    flowerPotStatus: { type: String , default: 1},
    flowerPotActiveDays: { type: Number, default: 0},
    flowerPotSensorHumidityStatus: { type: Number, default: 0},
    flowerPotSensorLightStatus: { type: Number, default: 0},
    flowerPotSensorTempStatus: { type: Number, default: 0},
    flowerPotSensorWaterStatus: { type: Number, default: 0},
    flowerPotMinSupply: Number,
    flowerPotMaxSupply: Number,
    flowerPotPlant:{ type:mongoose.Schema.Types.ObjectId,ref:'Plant'},
    flowerPotSensorHistory:[{
        _id: { type: mongoose.Schema.ObjectId, auto:true } ,
        sensorHumedityValue:Number,
        sensorTempValue:Number,
        sensorLightValue:Number
    }]
})

module.exports = mongoose.model('FlowerPot',FlowerPotSchema,'flowerpot')