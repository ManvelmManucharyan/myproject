const UserServices = require('../services/UserServices')

class UserController {
    static async getAllUsers (req, res){
        const users = await UserServices;
        res.status(200).send(users)
    }
}

module.exports = UserController;