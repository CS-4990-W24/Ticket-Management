const connection = require('../database');

const ticketModel = {
    findAll: callback => {
        connection.query('SELECT * FROM Tickets', (err, results, fields) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },
    

    findById: (id, callback) => {
        connection.query('SELECT * FROM Tickets WHERE id = ?', [id], callback);
    },

    insertTicket: (ticketData, callback) => {
        const sql = 'INSERT INTO Tickets (Price, Seat, Status) VALUES (?, ?, ?)';
        const values = [ticketData.Price, ticketData.Seat, ticketData.Status];
        connection.query(sql, values, callback);
    },
};

module.exports = ticketModel;
