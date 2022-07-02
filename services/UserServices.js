const employee = require('../models/employee');

class UserServices {
    static async getAllUsers(){
        return employee.findAll()
    }

    static async getAllUsersById(id){
        return employee.findOne( {where: {id}});
    }

    static async createUser(name,age,email, password){
        await employee.create({name,age,email, password})
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