'use strict'

const express = require('express'),
    app = express(),
    ioServer = require('./services/app')(app),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul  = require('express-method-override')('_method'),
    port = (process.env.PORT || 5000),
    cors = require('cors')


app
    .set('port', port)

    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(morgan('dev'))
    .use(restFul)
    
ioServer.listen(port)
