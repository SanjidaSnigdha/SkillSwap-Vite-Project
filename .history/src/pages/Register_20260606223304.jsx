import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name, photo, email, password});
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-5xl font-bold text-[#322ad5] text-center">
          Register Now!
        </h1>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}

            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            {/* photo URL */}

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />

            {/* email */}

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            <p className="text-center font-semibold pt-5">
              Already Have an Account ?{" "}
              <Link className="text-primary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
