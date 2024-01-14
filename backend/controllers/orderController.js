
const OrderModel = require('../models/orderModel');

const OrderController = {
    getAllTickets: (req, res) => {
        OrderModel.findAll((err, tickets) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(tickets);
            }
        });
    },

    getTicketById: (req, res) => {
        OrderModel.findById(req.params.id, (err, ticket) => {
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

    deleteTicket: (req, res) => {
        orderModelModel.deleteTicket(req.body, (deleteError, deleteResults) => {
            if (deleteError) {
                console.error("Error in deleting ticket:", deleteError);
                return res
                    .status(500)
                    .send({ message: "Internal Server Error" });
            }
            console.log("Ticket deleted:", deleteResults);
            res.status(201).send({
                message: `Ticket created with ID: ${deleteResults.deleteId}`,
            });
        });
    }

};

module.exports = OrderController;
