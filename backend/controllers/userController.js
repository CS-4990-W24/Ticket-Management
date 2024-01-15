const { checkEmailExists, insertUser, getAllUsers, getUserInfo, deleteUser } = require("../models/userModel");
const { checkMissingParams } = require("../utils/checkMissingParams");

const createUserController = async (req, res) => {
    const requiredParams = ["email", "password", "userRole"];
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
        const result = await checkEmailExists(req.body.email);
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

const getAllUsersController = async (req, res) => {
    try {
        const result = await getAllUsers();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in getting all users:", error);
        return res
            .status(500)
            .send({ message: "Internal Server Error: " + error });
    }
}

const loginController = async (req, res) => {
    const requiredParams = ["email", "password"];
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
        const result = await getUserInfo(req.body.email);
        if (result.length === 0) {
            return res.status(404).send({ message: "User not found" });
        }
        if (result[0].Password !== req.body.password) {
            return res.status(401).send({ message: "Incorrect password" });
        }
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in logging in:", error);
        return res
            .status(500)
            .send({ message: "Internal Server Error: " + error });
    }
}

const deleteUserController = async (req, res) => {
    const requiredParams = ["Email"];
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
        const result = await deleteUser(req.body.Email);
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error in deleting user:", error);
        return res
            .status(500)
            .send({ message: "Internal Server Error: " + error });
    }
}


module.exports = { createUserController, getAllUsersController, loginController, deleteUserController };
