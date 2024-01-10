const userModel = require('./userModel');

const createUserController = (req, res) => {
    userModel.createUser(req.body, (error, results) => {
        if (error) {
            console.error('Error:', error);
            if (error.message === 'Email already exists') {
                return res.status(409).send({ message: error.message }); // 409 Conflict
            }
            return res.status(500).send({ message: 'Internal Server Error' });
        }
        console.log('User created:', results);
        res.status(201).send({ message: `User created with ID: ${results.insertId}` });
    });
};

module.exports = { createUserController };
