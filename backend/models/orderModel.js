const connection = require('../database');

const deleteTicket = async (ticketData, callback) => {
        const sql = 'DELETE FROM Tickets WHERE TicketId = ?';
        const values = [ticketData.id];
        connection.execute(sql, values, callback);
    };

module.exports = {deleteTicket};
