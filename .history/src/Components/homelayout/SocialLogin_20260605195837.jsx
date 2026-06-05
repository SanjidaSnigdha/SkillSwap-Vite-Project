import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-primary w-full">
          <FcGoogle siz />
          Login with Google
        </button>
        <button className="btn btn-outline btn-secondary w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
