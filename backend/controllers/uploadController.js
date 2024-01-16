const {insertTicket} = require('../models/uploadModel');

const insertTicketController = async (req, res) => {
    insertTicket(req.body, (insertError, insertResults) => {
        if (insertError) {
            console.error("Error in creating ticket:", insertError);
            return res
                .status(500)
                .send({ message: "Internal Server Error" });
        }
        console.log("Ticket created:", insertResults);
        res.status(201).send({
            message: `Ticket created with ID: ${insertResults.insertId}`,
        });
    });
}

module.exports = {insertTicketController}