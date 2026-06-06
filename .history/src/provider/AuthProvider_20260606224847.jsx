import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser=(email, password)=>{
   
    return
  }

  const authData = {
    user,
    setUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
