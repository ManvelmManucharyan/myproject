const UserServices = require('../services/UserServices')

class UserController {
    static async getAllUsers (req, res){
        const users = await UserServices.getAllUsers();
        res.status(200).send(users)
    }

    static async createUser  (req, res){
        const {name, age, email} = req.body;
        await UserServices.createUser(name,age,email)
        res.status(201).send('User Successfully created')
   }
}
module.exports = UserController;