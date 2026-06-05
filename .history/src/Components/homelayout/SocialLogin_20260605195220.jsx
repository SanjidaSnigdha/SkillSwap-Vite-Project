import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-primary w-full">Login with Google</button>
        <button className="btn btn-outline btn-primary w-full">Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
