'use strict'

const mongoose = require('mongoose')

mongoose.Promise = Promise

let SupplySchema = new mongoose.Schema({

})

module.exports = mongoose.model('Supply',SupplySchema,'supply')