'use strict'
const User = require('../schemas/UserSchema'),
    bcrypt = require('bcrypt')

/**
 * @param {any} user 
 * @returns 
 */
function loginUser(user){
    return new Promise(function(resolve,reject){
        User.findOne({'userEmail':user.userEmail},"_id userEmail userPassword userDocumentNumber userFlowerPot userName userLastName",function(err,user){
            if(err) return reject(err)
            return resolve(user)
        })
    })
}

/**
 * @param {any} user 
 * @returns 
 */
function postUser(user){
    return new Promise(function(resolve,reject){
        let driv = new User({
            userName : user.userName,
            userLastName : user.userLastName,
            userEmail : user.userEmail,
            userPassword : user.userPassword,
            userDocumentNumber : user.userDocumentNumber
        })
        driv.save(function(err,user){
            if(err) return reject(err)
            return resolve(user)
        })
    })
}

/**
 * @param {any} _id 
 * @returns 
 */
function deleteUser(_id){
    return new Promise(function(resolve,reject){
        User.remove({'_id':_id},function(err,rows){
            if(err) return reject(err)
            return resolve(rows)
        })
    })
}

// function linkUserPlant(data){
//     return new Promise((resolve,reject)=>{
//         User.update({'_id':data.idUser},)
//     })
// }

module.exports = {
    loginUser,
    postUser,
    deleteUser
}