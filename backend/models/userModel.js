const connection = require('../database');

const checkEmailExists = (email, callback) => {
    const sql = 'SELECT * FROM Users WHERE Email = ?';
    connection.query(sql, [email], callback);
};

const insertUser = (userData, callback) => {
    const sql = 'INSERT INTO Users (Email, Password, UserRole) VALUES (?, ?, ?)';
    const values = [userData.Email, userData.Password, userData.UserRole];
    connection.query(sql, values, callback);
};

module.exports = { checkEmailExists, insertUser };