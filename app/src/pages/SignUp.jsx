import Auth from "@/components/Auth";
import { useState } from "react";

function SignUp() {
    const [auth, setAuth] = useState({ email: "", password: "" });
    const createUser = () => {
        console.log("I am creating new user with: ")
        console.log(auth)
    }


    return <Auth login={false} userInfo={auth} setUserInfo={setAuth} handleUserInfo={createUser}/>;
}

export default SignUp;
