const User = require('../models/user')
const { generateToken } = require('../helpers/tokenGenerator')
const { verifyPassword } = require('../helpers/passwordGenerator')

class UserController {
    static register (req,res,next){
        console.log(req.body.email, req.body.password)
        User.create({
            username : req.body.username,
            email : req.body.email,
            password: req.body.password
        })
        .then(user => {
            console.log(user)
            let payloads = {
                id : user._id
            }
            let token = generateToken(payloads)
            res.status(201).json({access_token : token})
        })
        .catch(err => {
            next(err)
        })
    }

    static login (req,res,next){
        User.findOne({
            email : req.body.email
        })
        .then(user => {
            if(user && verifyPassword(req.body.password,user.password)){
                let payloads = {
                    id : user._id
                }
                let token = generateToken(payloads)
                res.status(201).json({access_token : token})
            }else{
                res.status(404).json({ message : 'wrong username/password'})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController