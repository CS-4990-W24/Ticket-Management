import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function AuthenticationProvider({ children }) {
    const [user, setUser] = useState({
        email: "EMAIL@cpp.edu",
        username: "Guest",
        password: "Password",
        authenticated: false,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}