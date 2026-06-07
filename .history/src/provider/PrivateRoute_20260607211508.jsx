import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    // if->user ? return children
    const { user } = use(AuthContext);
    console.log(user)

    if (user && user?.email) {
        return children;
    }
  return <Navigate to></Navigate>;
    // navigate--> Login 

};

export default PrivateRoute;
