const {findAll, findById, adminDeleteTicket} = require('../models/ticketModel');
const { checkMissingParams } = require('../utils/checkMissingParams');

const getAllTickets = async (req, res) => {
    findAll((err, tickets) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(tickets);
        }
    });
};

const getTicketById = async (req, res) => {
    findById(req.params.id, (err, ticket) => {
        if (err) {
            console.error("Error in getAllTickets:", err);
            return res.status(500).json({ error: "Internal Server Error" })
        } else if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    });
};

const adminDeleteTicketController = async (req, res) => {
    adminDeleteTicket(req.body.TicketId, (deleteError, deleteResults) => {
        if (deleteError) {
            console.error("Error in deleting ticket:", deleteError);
            return res
                .status(500)
                .send({ message: "Internal Server Error" });
        }
        console.log("Ticket deleted:", deleteResults);
        res.status(201).send({
            message: `Ticket deleted with ID: ${deleteResults.deleteId}`,
        });
    });
} 

module.exports = {getAllTickets, getTicketById, adminDeleteTicketController};
