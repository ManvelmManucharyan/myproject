const bcrypt = require('bcrypt')
const User = require('../models/employee')
const UserDto = require('../dtos/dto')
const jwt = require('../lib/jwt')
const {generateToken} = require("../lib/jwt");
const ApiError = require('../lib/errors/api-error')

class AuthService {
    static async register (name, age, email, password){
        const candidate = await User.getUserByEmail(email)
        if(candidate){
            throw ApiError.BadRequest(`User with ${email} address already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await User.create({name, age, email, password : hashPassword})
        const userDto = new UserDto(user);
        return jwt.generateToken({...userDto})
    }

    static async login (email,password){
        const user =  await User.getUserByEmail(email)
        if(!user){
            throw ApiError.BadRequest('User is not registered')
        }
        const isPasswordEquals = await bcrypt.compare(password, user.password )
        if(!isPasswordEquals){
            throw ApiError.BadRequest('User not found')
        }
        const userDto = new UserDto(user);
        const token = jwt.generateToken({...userDto})
        return {
            ...token,
            user: userDto
        }
    }
}

module.exports = AuthService