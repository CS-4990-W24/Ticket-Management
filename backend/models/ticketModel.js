const connection = require('../database');

const findAll = async (callback) => {
    connection.execute('SELECT * FROM Tickets', (err, results, fields) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};
    
const findById = async (id, callback) => {
    connection.execute('SELECT * FROM Tickets WHERE TicketId = ?', [id], callback);
};

const adminDeleteTicket = async (id, callback) => {
    const sql = 'DELETE FROM Tickets WHERE TicketId = ?';
    const values = [id];
    connection.execute(sql, values, callback);
};

module.exports = {findAll, findById, adminDeleteTicket};
