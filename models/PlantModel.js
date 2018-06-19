'use strict'

const Plant = require('../schemas/PlantSchema')

class PlantModel{
    getPlants(){
        return new Promise((resolve,reject)=>{
            Plant.find({},(err,plants)=>{
                if(err) return reject(err)
                return resolve(plants)
            })
        })
    }
}

module.exports = PlantModel