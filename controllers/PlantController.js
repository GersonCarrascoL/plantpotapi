'use strict'

const PlantModel = require('../models/PlantModel'),
    pm = new PlantModel()
class PlantController{
    getPlants(req,res){
        //let _id = req.params.id
        
        let response = pm.getPlants()

        response.then(resolve=>{
            return res.status(200).send({
                plants: resolve
            })
        }).catch( reject =>{
            return res.status(500).send({
                message:reject.stack
            })
        })
    }
}

module.exports = PlantController