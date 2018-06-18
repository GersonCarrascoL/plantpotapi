'use strict'

const mongoose = require('mongoose')

mongoose.Promise = Promise

let FlowerPotSchema = new mongoose.Schema({

})

module.exports = mongoose.model('FlowerPot',UserSchema,'flowerpot')