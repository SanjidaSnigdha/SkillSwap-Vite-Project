import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState({
        name: "Rahat",
        email: "hablu@rahat.com"
    });
    const authData = {
     user,
     setUser,
    }
    return <AuthContext value={l}></AuthContext>;
    
};

export default AuthProvider;