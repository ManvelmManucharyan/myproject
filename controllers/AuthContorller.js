const AuthService = require('../services/AuthService')

class AuthController {
    static async register(req,res){
        try {
            const {name,age,email,password} = req.body
            await AuthService.register(name, age, email, password)
            res.status(201).send('Successfully registered')
        }catch (e){
            res.status(500).send(e.message)
        }
    }

    static async login(){

    }
}

module.exports = AuthController