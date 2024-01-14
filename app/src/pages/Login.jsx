import { useState } from "react";
import "@/styles/login.css";
import Auth from "@/components/Auth";

function Login() {
    const [auth, setAuth] = useState({ email: "", password: "" });
    const getUserInfo = () => {
        console.log("I am logging in!")
        console.log(auth)
    }


    return <Auth login={true} userInfo={auth} setUserInfo={setAuth} handleUserInfo={getUserInfo}/>;
}

export default Login;
