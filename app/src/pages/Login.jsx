import { useContext, useState } from "react";
import "@/styles/login.css";
import Auth from "@/components/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/components/AuthenticationContext";

function Login() {
    const [auth, setAuth] = useState({ email: "", password: "" });
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const getUserInfo = async () => {
        const request = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(auth),
        });

        const response = await request.json();
        if (request.status !== 200) {
            alert(response.message);
            return;
        }

        alert("Login successful!");
        console.log(response)
        await setUser({
            email: response[0].Email,
            authenticated: true,
            admin: response[0].UserRole === "admin" ? true : false,
        });
        navigate("/")
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
