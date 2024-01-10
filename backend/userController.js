const userModel = require("./userModel");

const createUserController = (req, res) => {
    userModel.checkEmailExists(req.body.Email, (error, results) => {
        if (error) {
            console.error("Error in checking email:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }
        if (results.length > 0) {
            return res.status(409).send({ message: "Email already exists" });
        }

        userModel.insertUser(req.body, (insertError, insertResults) => {
            if (insertError) {
                console.error("Error in creating user:", insertError);
                return res
                    .status(500)
                    .send({ message: "Internal Server Error" });
            }
            console.log("User created:", insertResults);
            res.status(201).send({
                message: `User created with ID: ${insertResults.insertId}`,
            });
        });
    });
};

module.exports = { createUserController };
