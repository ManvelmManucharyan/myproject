const bcrypt = require('bcrypt')
const User = require('../models/employee')
const UserDto = require('../dtos/dto')
const jwt = require('../lib/jwt')
const {generateToken} = require("../lib/jwt");

class AuthService {
    static async register (name, age, email, password){
        const candidate = await User.getUserByEmail(email)
        if(candidate){
            throw new Error(`User with ${email} address already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await User.create({name, age, email, password : hashPassword})
        const userDto = new UserDto(user);
        return jwt.generateToken(...{userDto})
    }

    static async login (email,password){

    }
}

module.exports = AuthService