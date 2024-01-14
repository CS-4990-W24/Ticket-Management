const connection = require('../database');

const orderModel = {
    findAll: callback => {
        connection.execute('SELECT * FROM Tickets', (err, results, fields) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },
    

    findById: (id, callback) => {
        connection.execute('SELECT * FROM Tickets WHERE id = ?', [id], callback);
    },

    deleteTicket: (ticketData, callback) => {
        const sql = 'DELETE FROM Tickets (Price, Seat, Status, title, location, date) VALUES (?,?,?, ?, ?, ?)';
        const values = [ticketData.Price, ticketData.Seat, ticketData.Status, ticketData.title, ticketData.location, ticketData.date];
        connection.execute(sql, values, callback);
    },
};

module.exports = orderModel;
