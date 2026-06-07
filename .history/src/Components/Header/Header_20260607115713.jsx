import React, { use } from "react";
import { Link, NavLink } from "react-router";
import navImg from "../../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("user trying to logout");
    logOut()
    .then(()=> {
      alert("You Logged Out success")
    })
  };
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto mt-5">
      <div>{user && user.email}</div>
      <div className="flex items-center gap-1">
        <img className="w-25 h-25" src={navImg} alt="" />
        <h1 className="font-family text-4xl font-bold">
          Skill<span className="text-[#322ad5]">Swap</span>
        </h1>
      </div>
      <div className="nav flex justify-between gap-5 text-[#000000]/70 font-medium text-[16px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <FaUserAlt className="text-[#322ad5]" size={30} />

        {user ? (
          <button onClick={handleLogout} className="btn btn-primary w-20">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary w-20">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
