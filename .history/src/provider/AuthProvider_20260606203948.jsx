import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState({
        name: "rahat",
        email: "hablu@rahat"
    })
    return <AuthContext></AuthContext>;
    
};

export default AuthProvider;