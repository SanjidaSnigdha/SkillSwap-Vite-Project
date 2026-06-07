import React, { use } from "react";

const PrivateRoute = ({ children }) => {
    // if->user ? return children
    const { user } = use
  return children;
    // navigate--> Login 

};

export default PrivateRoute;
