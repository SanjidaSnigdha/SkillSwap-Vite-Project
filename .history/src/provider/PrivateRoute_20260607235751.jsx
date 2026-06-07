import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    // if->user ? return children
    const { user, loadin } = use(AuthContext);
    console.log(user)

    if (user && user?.email) {
        return children;
    }
  return <Navigate to='/auth/login'></Navigate>;
    // navigate--> Login 

};

export default PrivateRoute;
