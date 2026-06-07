import React from "react";

const PrivateRoute = ({ children }) => {
  return (
    <div>
      <h2>This is private route</h2>
      {children}
    </div>
  );
};

export default PrivateRoute;
