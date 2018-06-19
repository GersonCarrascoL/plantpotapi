'use strict'

const PlantController = require('../controllers/PlantController'),
    pc = new PlantController(),
    express = require('express'),
    router = express.Router()

router
    .get('/api/v1/plants', pc.getPlants)

module.exports = router