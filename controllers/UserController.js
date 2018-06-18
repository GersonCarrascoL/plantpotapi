'use strict'

const um = require('../models/UserModel'),
    jwtService = require('../services/jwt'),
    bcrypt = require('bcrypt'),
    jwt = new jwtService()


class UserController{

    /**
     * @param {any} req 
     * @param {any} res 
     * @memberof UserController
     */
    loginUser(req,res){
        let user = {
            userEmail:req.body.userEmail,
            userPassword: req.body.userPassword
        }

        let response = um.login(user)

        response.then(function(resolve){
            if(resolve==null){
                return res.status(202).send({
                    message:"User doesn't exist"
                })
            }
            bcrypt.compare(user.userPassword,resolve.userPassword,function(err,result){
                if(err){
                    return res.status(500).send({
                        message:err.stack
                    })
                }
                if(result){
                    return res.status(200).send({
                        token:jwt.createToken(user.userEmail)
                    })
                }else{
                    return res.status(202).send({
                        message:`Email or password wrong`
                    })
                }
            })
        }).catch(function(reject){
            return res.status(500).send({
                message: reject.stack
            })
        })
    }
    
    /**
     * @param {any} req 
     * @param {any} res 
     * @memberof UserController
     */
    postUser(req,res){
        let user = {
            userName : req.body.userName,
            userLastName : req.body.userLastName,
            userEmail : req.body.userEmail,
            userPassword : req.body.userPassword
        }

        var response = um.postUser(user)

        response.then(function(resolve){
            return res.status(201).send({
                message:`Correct register`
            })
        }).catch(function(reject){
            return res.status(500).send({
                message: reject.stack
            })
        }) 
    }

}

module.exports = UserController