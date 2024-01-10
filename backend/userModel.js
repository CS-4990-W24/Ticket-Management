const connection = require('./database');

const createUser = (userData, callback) => {

    const checkEmailSql = 'SELECT * FROM Users WHERE Email = ?';

    connection.query(checkEmailSql, [userData.Email], (error, results) => {
        if (error) {
            console.error('Error in query:', error);
            return callback(error);
        }
        if (results.length > 0) {
            console.log('Email already exists');
            return callback(new Error('Email already exists'));
        }
        else {

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
}
});
}


module.exports = { createUser };