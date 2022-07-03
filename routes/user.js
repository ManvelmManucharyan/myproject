const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authorize = require('../middleware/authorize')

router.get('/',authorize, UserController.getAllUsers);
// router.get('/:id', UserController.getAllUsersById);
router.get('/:email', UserController.getUserByEmail);
// router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser)

module.exports = router;
