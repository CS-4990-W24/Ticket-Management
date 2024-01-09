const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "ticket-management-group10-database.cavyfxpgw6b8.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "4800group10password",
    database: "ticketManagerDatabease",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;