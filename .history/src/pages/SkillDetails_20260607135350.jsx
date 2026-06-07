import React from "react";
import Header from "../Components/Header/Header";
import RightAside from "../Components/homelayout/RightAside/RightAside";
import SkillDetailsCard from "../Components/SkillDetailsCard";
import { useLoaderData } from "react-router";

const SkillDetails = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
      <section className="col-span-9">
        <h2 className="font-bold mb-5">Skill Details</h2>
        <SkillDetailsCard></SkillDetailsCard>
      </section>
      <aside className="col-span-3">
        <RightAside></RightAside>
      </aside>

      </main>
    </div>
  );
};

export default SkillDetails;
