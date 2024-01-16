const connection = require('../database');

const insertTicket = async (ticketData, callback) => {
    const sql = 'INSERT INTO Tickets (Price, Seat, Status, Title, Location, Date) VALUES (?,?,?, ?, ?, ?)';
    const values = [ticketData.Price, ticketData.Seat, ticketData.Status, ticketData.Title, ticketData.Location, ticketData.Date];
    connection.execute(sql, values, callback);
};

module.exports = {insertTicket}