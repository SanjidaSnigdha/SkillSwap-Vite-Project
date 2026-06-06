import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState({
        name: "Rahat",
        email: "hablu@rahat.com"
    });
    const authData = {
     user,
     set
    }
    return <AuthContext></AuthContext>;
    
};

export default AuthProvider;