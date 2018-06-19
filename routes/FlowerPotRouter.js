'use strict'

const FlowerPotController = require('../controllers/FlowerPotController'),
    fpc = new FlowerPotController(),
    express = require('express'),
    router = express.Router()

router
    .get('/api/v1/users/:id/flowerpots',fpc.getUserFlowerPots)


module.exports = router