const employee = require('../models/employee');

class UserServices {
    static async getAllUsers(){
        return employee.findAll()
    }

    static async createUser(name,age,email){
        await employee.create({name,age,email})
    }
}

module.exports = UserServices;