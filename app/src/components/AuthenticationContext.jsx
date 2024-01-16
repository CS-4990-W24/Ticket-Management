import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function AuthenticationProvider({ children }) {
    const [user, setUser] = useState({
        email: "EMAIL@cpp.edu",
        authenticated: false,
        admin: false,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}