const express = require('express');
const {getAllTickets, getTicketById, adminDeleteTicketController} = require('../controllers/ticketController');
const router = express.Router();

router.get('/tickets', getAllTickets);
router.get('/tickets/:id', getTicketById);
router.delete('/tickets/:id', adminDeleteTicketController)

module.exports = router;
