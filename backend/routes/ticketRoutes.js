const express = require('express');
const TicketController = require('../controllers/ticketController');
const router = express.Router();

router.get('/tickets', TicketController.getAllTickets);
router.get('/tickets/:id', TicketController.getTicketById);

module.exports = router;
