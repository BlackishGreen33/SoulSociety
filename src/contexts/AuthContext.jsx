import React, { useContext, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { auth } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() { return useContext(AuthContext) };

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();   

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            navigate('/chats');
        });
    }, [user, location]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}