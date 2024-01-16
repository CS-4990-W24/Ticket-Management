const express = require('express');
const {deleteTicketController} = require('../controllers/checkoutController');
const router = express.Router();

router.delete('/tickets/:id', deleteTicketController);

module.exports = router;    