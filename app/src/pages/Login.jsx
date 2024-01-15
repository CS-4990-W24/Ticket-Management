import { useState } from "react";
import "@/styles/login.css";
import Auth from "@/components/Auth";

function Login() {
    const [auth, setAuth] = useState({ email: "", password: "" });
    const getUserInfo = async () => {
        const request = await fetch("http://localhost:3000/api/login", {
            method: "GET",
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
            login={true}
            userInfo={auth}
            setUserInfo={setAuth}
            handleUserInfo={getUserInfo}
        />
    );
}

export default Login;
