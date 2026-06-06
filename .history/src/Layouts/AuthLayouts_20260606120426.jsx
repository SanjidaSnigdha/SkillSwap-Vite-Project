import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Header></Header>

      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayouts;
