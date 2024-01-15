const express = require('express');
const {deleteTicketController} = require('../controllers/orderController');
const router = express.Router();

router.delete('/tickets/:id', deleteTicketController);

module.exports = router;    