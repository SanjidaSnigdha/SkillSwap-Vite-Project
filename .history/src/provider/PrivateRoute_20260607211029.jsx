import React, { use } from "react";

const PrivateRoute = ({ children }) => {
    // if->user ? return children
    const { user } = use(Auth)
  return children;
    // navigate--> Login 

};

export default PrivateRoute;
