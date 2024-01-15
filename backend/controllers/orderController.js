const {deleteTicket} = require('../models/orderModel');

const deleteTicketController = async (req, res) => {
    deleteTicket(req.params, (deleteError, deleteResults) => {
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

module.exports = {deleteTicketController};
