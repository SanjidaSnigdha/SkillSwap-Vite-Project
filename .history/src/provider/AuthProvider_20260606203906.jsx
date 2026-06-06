import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState({
        name: ""
    })
    return <AuthContext></AuthContext>;
    
};

export default AuthProvider;