const jwt = require('../lib/jwt');
const ApiError = require('../lib/errors/api-error')

module.exports = function (req, res, next){
    try{
        const {authorization} = req.headers
        if(!authorization){
            return next(ApiError.UnAuthorizedError())
        }

        const accessToken = authorization.split(' ')[1]
        if(!accessToken){
            return next(ApiError.UnAuthorizedError())
        }

        const userData = jwt.verifyToken(accessToken)

        if(!userData){
            return next(ApiError.UnAuthorizedError())
        }

        req.user = userData
        next()
    }catch (e) {
        return next(ApiError.UnAuthorizedError())
    }
}