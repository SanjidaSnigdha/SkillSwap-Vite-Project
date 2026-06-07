import React from "react";
import Header from "../Components/Header/Header";
import RightAside from "../Components/homelayout/RightAside/RightAside";

const SkillDetails = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
      <section className="cols">
        <h2 className="font-bold mb-5">Skill Details</h2>
      </section>
      <aside>
        <RightAside></RightAside>
      </aside>

      </main>
    </div>
  );
};

export default SkillDetails;
