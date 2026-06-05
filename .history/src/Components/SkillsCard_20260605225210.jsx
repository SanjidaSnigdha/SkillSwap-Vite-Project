import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div>
      <h1 className="font"> {skill.skillName}</h1>
      <img
        className="w-80 h-80 rounded-2xl mt-4 p-3"
        src={skill.image}
        alt=""
      />
      <div>
        <p>
          Provide by :{" "}
          <span className="text-[#00D390]">{skill.providerName}</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
