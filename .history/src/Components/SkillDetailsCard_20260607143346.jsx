import React from "react";
import Categories from "./Categories";
import { Link } from "react-router";

const SkillDetailsCard = ({ skill }) => {
  console.log(skill);
  return (
    <div className="space-y-5">
      <img className="w-full h-[350px] rounded object-cover" src={skill.image} alt="" />
      <h2 className="text-2xl">{skill.skillName}</h2>
      <p>{skill.description}</p>
      <Link className="" to={`/category/${skill.skillId}`}></Link>
    </div>
  );
};

export default SkillDetailsCard;
