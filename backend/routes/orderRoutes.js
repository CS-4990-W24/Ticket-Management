const express = require('express');
const OrderController = require('../controllers/orderController');
const router = express.Router();

router.get('/tickets', OrderController.getAllTickets);
router.get('/tickets/:id', OrderController.getTicketById);
router.delete('/tickets/:id', OrderController.deleteTicket);

module.exports = router;