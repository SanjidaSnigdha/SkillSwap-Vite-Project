import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState()
    return <AuthContext></AuthContext>;
    
};

export default AuthProvider;