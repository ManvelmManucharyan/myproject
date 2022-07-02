const jwt = require('jsonwebtoken')
const config = require('../configs/config')

function generateToken (payload){
    const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: "35m"})
    return {
        token
    }
}

module.exports = {
    generateToken
}