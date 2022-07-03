const HTTP_STATUS_CODES = require('../constants/http-status-codes')

class ApiError extends Error{
    statusCode;
    errors;

    constructor(statusCode, message, errors= []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors
    }

    static UnAuthorizedError(){
        return new ApiError(HTTP_STATUS_CODES.UNAUTHORIZED, 'User is not authorized')
    }

    static BadRequest (message, errors = []){
        return new ApiError(HTTP_STATUS_CODES.BAD_REQUEST, message, errors)
    }
}

module.exports = ApiError