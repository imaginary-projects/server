const jwt = require('jsonwebtoken')

function generateToken (payloads){
    return jwt.sign(payloads,process.env.SECRET_KEY)
}

function verifytoken(payloads){
    return jwt.verify(payloads,process.env.SECRET_KEY)
}

module.exports = {
    generateToken,
    verifytoken
}