const jwt = require('jsonwebtoken')
const config = require('../configs/config')

function generateToken (payload){
    const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: "35m"})
    return {
        token
    }
}

function verifyToken(token){
    try{
        return jwt.verify(token, config.JWT_SECRET)
    }catch (e){
        return null
    }
}

module.exports = {
    generateToken,
    verifyToken
}