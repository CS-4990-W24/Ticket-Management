const { checkEmailExists, insertUser } = require("../models/userModel");
const { checkMissingParams } = require("../utils/checkMissingParams");

const createUserController = async (req, res) => {
    const requiredParams = ["Email", "Password", "UserRole"];
    const checkParams = checkMissingParams(
        Object.keys(req.body),
        requiredParams
    );
    if (checkParams.length > 0) {
        return res
            .status(400)
            .send({ message: "Missing fields: " + checkParams.join(", ") });
    }

    try {
        const result = await checkEmailExists(req.body.Email);
        if (result.length > 0) {
            return res.status(409).send({ message: "Email already exists" });
        }
        const insertResult = await insertUser(req.body);

        console.log("User created:", insertResult);
        res.status(201).send({
            message: `User created with ID: ${insertResult.insertId}`,
        });
    } catch (error) {
        console.error("Error in creating user:", error);
        return res
            .status(500)
            .send({ message: "Internal Server Error: " + error });
    }
};

module.exports = { createUserController };
