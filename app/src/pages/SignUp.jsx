import Auth from "@/components/Auth";
import { useState } from "react";

function SignUp() {
    const [auth, setAuth] = useState({
        email: "",
        password: "",
        userRole: "user",
    });
    const createUser = async () => {
        const request = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify(auth),
        });
        const response = await request.json();
        console.log(response);
    };

    return (
        <Auth
            login={false}
            userInfo={auth}
            setUserInfo={setAuth}
            handleUserInfo={createUser}
        />
    );
}

export default SignUp;
