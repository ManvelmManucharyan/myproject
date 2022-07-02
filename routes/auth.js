const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthContorller')

router.post('/register', AuthController.register);


module.exports = router;
