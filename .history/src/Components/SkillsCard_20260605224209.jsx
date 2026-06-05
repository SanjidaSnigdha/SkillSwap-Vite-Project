import React from "react";

const SkillsCard = ({ skill }) => {
  return <div>{skill.skillName}
  <img className="" src={skill.image} alt="" />
  </div>;
};

export default SkillsCard;
