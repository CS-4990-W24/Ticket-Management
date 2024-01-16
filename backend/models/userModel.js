const connection = require("../database");
async function execute(cmd, placeholder) {
    const data = await new Promise((resolve, reject) =>
        connection.execute(cmd, placeholder, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    );
    return data;
}

const checkEmailExists = async (email) => {
    const sql = "SELECT * FROM Users WHERE Email = ?";
    return await execute(sql, [email]);
};

const insertUser = async (userData) => {
    const sql =
        "INSERT INTO Users (Email, Password, UserRole) VALUES (?, ?, ?)";
    const values = [userData.email, userData.password, userData.userRole];
    return await execute(sql, values);
};

const deleteUser = async (email) => {
    const sql = "DELETE FROM Users WHERE Email = ?";
    return await execute(sql, [email]);
};

const getAllUsers = async () => {
    const sql = "SELECT * FROM Users";
    return await execute(sql);
};

const getUserInfo = async (email) => {
    const sql = "SELECT * FROM Users WHERE Email = ?";
    return await execute(sql, [email]);
};

module.exports = { checkEmailExists, insertUser, getAllUsers, getUserInfo, deleteUser };
