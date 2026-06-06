import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
      <div className="flex justify-center mt-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h1 className="text-5xl font-bold text-[#322ad5] text-center">
            Login now!
          </h1>

          <div className="card-body">
            <fieldset className="fieldset">
                {/* name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
                {/* photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Name" />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
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
          </div>
        </div>
      </div>
    );
};

export default Register;