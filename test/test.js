const userModel = require('../backend/userModel');

const testCreateUser = async () => {
    const userData = { Email: "secondtest", Password: "654321", UserRole: "user" };

    try {
        const result = await new Promise((resolve, reject) => {
            userModel.createUser(userData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        if (result.insertId) {
            console.log("Test passed: User created with ID", result.insertId);
        } else {
            console.error("Test failed: No insertId returned");
        }
    } catch (error) {
        console.error("Test failed with error:", error.message);
    }
};

testCreateUser();
