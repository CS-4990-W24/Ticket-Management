const TicketModel = require('../models/ticketModel');

const TicketController = {
    getAllTickets: (req, res) => {
        TicketModel.findAll((err, tickets) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(tickets);
            }
        });
    },

    getTicketById: (req, res) => {
        TicketModel.findById(req.params.id, (err, ticket) => {
            if (err) {
                console.error("Error in getAllTickets:", err);
                return res.status(500).json({ error: "Internal Server Error" })
            } else if (ticket) {
                res.status(200).json(ticket);
            } else {
                res.status(404).json({ message: 'Ticket not found' });
            }
        });
    },
};

module.exports = TicketController;
