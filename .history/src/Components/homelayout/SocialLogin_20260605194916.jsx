import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-f">Login with Google</button>
        <button className="btn">Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
