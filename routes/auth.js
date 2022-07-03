const express = require('express');
const {body} = require('express-validator')
const AuthController = require('../controllers/AuthContorller')

const router = express.Router();

router.post('/register', body('email').isEmail(), body('name').isString(), body('password').isLength({min:4, max:20}), body('age').isFloat({min:0, max:120}), AuthController.register);
router.post('/login', AuthController.login)
module.exports = router;
