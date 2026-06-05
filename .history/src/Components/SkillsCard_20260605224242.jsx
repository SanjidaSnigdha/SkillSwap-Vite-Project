import React from "react";

const SkillsCard = ({ skill }) => {
  return <div>{skill.skillName}
  <img className="w-80 h-80 rounded" src={skill.image} alt="" />
  </div>;
};

export default SkillsCard;
