import React, { use } from "react";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
    // if->user ? return children
    const { user } = use(AuthContext);
    console.log(user)

    if (user && user)
  return children;
    // navigate--> Login 

};

export default PrivateRoute;
