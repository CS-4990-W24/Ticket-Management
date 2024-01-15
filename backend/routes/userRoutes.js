const express = require("express");
const router = express.Router();
const { createUserController, getAllUsersController, loginController, deleteUserController } = require("../controllers/userController");

router.post("/users", createUserController);
router.get("/users", getAllUsersController);
router.get("/login", loginController);
router.delete("/users", deleteUserController);

module.exports = router;
