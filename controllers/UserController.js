const UserServices = require('../services/UserServices')

class UserController {

    static async getAllUsers (req, res){
        const users = await UserServices.getAllUsers();
        res.status(200).send(users)
    }

    static async getAllUsersById (req,res){
        const user = await UserServices.getAllUsersById(req.params.id);
        res.status(200).send(user)
    }
    static async createUser  (req, res){
        const {name, age, email} = req.body;
        await UserServices.createUser(name,age,email)
        res.status(201).send('User Successfully created')
   }

   static async deleteUser (req, res){
        await UserServices.deleteUser(req.params.id)
        res.status(201).send('User successfully deleted')
   }

   static async updateUser (req,res){
        const {email} = req.body;
        await UserServices.updateUser(email, req.params.id);
        res.status(201).send('User successfully updated')
   }

}

module.exports = UserController;