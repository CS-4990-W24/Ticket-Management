const connection = require('./database');

const createUser = (userData, callback) => {
    const sql = 'INSERT INTO users (Email, Password, UserRole VALUES (?, ?, ?)';
    const values = [userData.email, userData.password, userData.userRole];
    connection.query(sql, values, callback);
};

module.exports = { createUser };