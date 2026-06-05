import React from "react";

const SkillsCard = ({ skill }) => {
  return <div>{skill.skillName}
  <img cl src={skill.image} alt="" />
  </div>;
};

export default SkillsCard;
