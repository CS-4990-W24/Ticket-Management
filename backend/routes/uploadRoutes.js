const express = require('express');
const {insertTicketController} = require('../controllers/uploadController');
const router = express.Router();

router.post('/tickets', insertTicketController);

module.exports = router;    