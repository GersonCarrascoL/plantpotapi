'use strict'

const mongoose = require('mongoose')

mongoose.Promise = Promise

let PlantSchema = new mongoose.Schema({
    plantName: String,
    plantType : String,
    plantGrowthStatus: {
        plantStatus:Number,
        seed:{
            seedStatusId: { type: Number , default :1},
            seedMinHumidity: Number,
            seedMaxHumidity: Number,
            seedMinLight: Number,
            seedMaxLight: Number,
            seedMinTemp: Number,
            seedMaxTemp: Number,
            seedGerminateDays: Number
        },
        germinate:{
            germinateStatusId: { type: Number , default :1},
            germinateMinHumidity: Number,
            germinateMaxHumidity: Number,
            germinateMinLight: Number,
            germinateMaxLight: Number,
            germinateMinTemp: Number,
            germinateMaxTemp: Number,
        }
    }
})

module.exports = mongoose.model('Plant',PlantSchema,'plant')