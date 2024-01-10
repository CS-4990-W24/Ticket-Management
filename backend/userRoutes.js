const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/users', userController.createUserController);

module.exports = router;
