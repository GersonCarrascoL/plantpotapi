'use strict'

var ioEvents = function(io){
    io.on('connection', function (socket) {
        
        console.log('Conected!')
        socket.on('message', data =>{
            console.log(data)
        })
        
        // socket.on('bus', function (latitude, longitude,orientation,type) {
        //     console.log({"id" : _id ,"latitude": latitude, "longitude": longitude , "orientation":orientation , "type":type})
        //     socket.broadcast.emit('users', latitude, longitude,orientation, _id ,type)
        // })
    
        // socket.on('disconnect' , function(){
        //     socket.broadcast.emit('bus-disconnect', _id)
        //     console.log('socket desconectado : '+ _id)
        // })
    })
}

var init = function(app){
    const server = require('http').Server(app),
        configWS = require('../config'),
        mongoose = require('mongoose'),
        SocketIO = require('socket.io')
    
    const configWSConnection = {
        scheme: "wss",
        domain: "api.artik.cloud",
        version: "v1.1",
        path: "live"
    }

    var io = new SocketIO(configWSConnection)
        
    ioEvents(io)

    mongoose.connect('mongodb://admin:admin1234@ds163630.mlab.com:63630/plantpot',()=>{
        console.log('Mongodb connect!');
    })
    return server
}

module.exports = init