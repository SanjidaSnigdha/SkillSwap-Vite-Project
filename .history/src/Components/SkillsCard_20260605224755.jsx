import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div>
      {skill.skillName}
      <img
        className="w-80 h-80 rounded-2xl mt-4 p-3"
        src={skill.image}
        alt=""
      />
      <div>
        <p>Provide by:<span></span>{skill.providerName}<spa</p>
      </div>
    </div>
  );
};

export default SkillsCard;
