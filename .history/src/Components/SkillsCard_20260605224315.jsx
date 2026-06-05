import React from "react";

const SkillsCard = ({ skill }) => {
  return <div>{skill.skillName}
  <img className="w-80 h-80 rounded mt-4 p-6" src={skill.image} alt="" />
  </div>;
};

export default SkillsCard;
