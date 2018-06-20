'use strict'

var ioEvents = function(io){
    io.on('connection', function (socket) {
        
        console.log('Conected!')
        
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
        mongoose = require('mongoose'),
        io = require('socket.io')(server)
        
    ioEvents(io)

    mongoose.connect('mongodb://admin:admin1234@ds163630.mlab.com:63630/plantpot',()=>{
        console.log('Mongodb connect!');
    })
    return server
}

module.exports = init