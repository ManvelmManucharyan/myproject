const employee = require('../models/employee');

class UserServices {
    static async getAllUsers(){
        return employee.findAll()
    }

    static async createUser(name,age,email){
        await employee.create({name,age,email})
    }

    static async deleteUser (id){
        await employee.destroy({
            where: {
                id
            },
        });
    }

    static async updateUser(email,id){
        await employee.update(
            {email},
            {
                where: { id },
            }
        );
    }
}

module.exports = UserServices;