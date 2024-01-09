const express = require('express');
const router = express.Router();
const userModel = require('./userModel');

router.post('/users', (req, res) => {
    userModel.createUser(req.body, (error, results) => {
        if (error) throw error;
        res.status(201).send(`User added with ID: ${results.insertId}`);
    });
});

module.exports = router;