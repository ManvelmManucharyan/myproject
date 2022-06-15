const employee = require('../models/employee');

class UserServices {
    static async getAllUsers(){
        return employee.findAll()
    }
}

module.exports = UserServices;