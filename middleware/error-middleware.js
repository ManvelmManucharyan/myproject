const ApiError = require('../lib/errors/api-error');
const HTTP_STATUS_CODES = require('../lib/constants/http-status-codes')

module.exports = function (err, req, res, next){
    console.log(err)
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            message: err.message,
            errors: err.errors
        });
    }
    return res.status(HTTP_STATUS_CODES.SERVER_ERROR).json({message: 'Unexpected error'})
};