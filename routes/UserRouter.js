'use strict'

const UserController = require('../controllers/UserController'),
    uc = new UserController(),
    auth = require('../middlewares/auth'),
    express = require('express'),
    router = express.Router()

router
    //App routes
    .post('/api/v1/user/login',uc.loginUser)

    .post('/api/v1/users',dc.postUser)

module.exports = router