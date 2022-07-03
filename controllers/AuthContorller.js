const {validationResult} = require('express-validator')
const AuthService = require('../services/AuthService');
const ApiError = require('../lib/errors/api-error');
const HTTP_STATUS_CODE = require('../lib/constants/http-status-codes')


class AuthController {
    static async register(req,res, next){
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Validation Error', errors.array()))
            }

            const {name,age,email,password} = req.body
            const token = await AuthService.register(name, age, email, password)
            res.status(201).json({
                message: true,
                token
            })
        }catch (e){
            next(e)
        }
    }

    static async login(req,res,next){
        try {
            const {email,password} = req.body
            const userData = await AuthController.login(email,password)
            return res.status(HTTP_STATUS_CODE.OK).json({
                ...userData
            })
        } catch (e){
            next(e)
        }
    }
}

module.exports = AuthController