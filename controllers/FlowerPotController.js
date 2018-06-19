'use strict'

const FlowerPotModel = require('../models/FlowerPotModel'),
    fpm = new FlowerPotModel()

class FlowerPotController{
    getUserFlowerPots(req,res){
        let id = req.params.id
        console.log(id)
        var response = fpm.getUserFlowerPots(id)
        response.then(resolve=>{
            return res.status(200).send({
                flowerPots: resolve.userFlowerPot
            })
        }).catch( reject =>{
            return res.status(500).send({
                message:reject.stack
            })
        })
    }
}

module.exports = FlowerPotController