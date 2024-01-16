import Auth from "@/components/Auth";
import { UserContext } from "@/components/AuthenticationContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const { setUser } = useContext(UserContext);
    const [auth, setAuth] = useState({
        email: "",
        password: "",
        userRole: "user",
    });
    const navigate = useNavigate();
    const createUser = async () => {
        const request = await fetch("http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/users", {
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
        alert("User created successfully");

        setUser({
            email: auth.email,
            authenticated: true,
            admin: false,
        });
        navigate("/")
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
