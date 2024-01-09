const connection = require('./database');

const createUser = (userData, callback) => {
    const sql = 'INSERT INTO Users (Email, Password, UserRole) VALUES (?, ?, ?)';
    const values = [userData.Email, userData.Password, userData.UserRole];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error in query:', error);
            return callback(error);
        }
        console.log('Query results:', results);
        callback(null, results);
    });
};


module.exports = { createUser };