const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser)

module.exports = router;
