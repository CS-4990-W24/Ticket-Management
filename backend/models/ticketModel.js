const connection = require('../database');

const ticketModel = {
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
        connection.execute('SELECT * FROM Tickets WHERE TicketId = ?', [id], callback);
    },
};

module.exports = ticketModel;
