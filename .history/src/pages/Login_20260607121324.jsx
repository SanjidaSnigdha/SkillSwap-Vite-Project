import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-5xl font-bold text-[#322ad5] text-center">
          Login now!
        </h1>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">

            {/* email */}

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-primary mt-4">Login</button>
            <p className="text-center font-semibold pt-5">
              Don't Have an Account ?{" "}
              <Link className="text-primary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
