import React from "react";
import Categories from "./Categories";

const SkillDetailsCard = ({ skill }) => {
  console.log(skill);
  return (
    <div>
      <img cl src={skill.image} alt="" />
      <h2 className="text-2xl">{skill.skillName}</h2>
    </div>
  );
};

export default SkillDetailsCard;
