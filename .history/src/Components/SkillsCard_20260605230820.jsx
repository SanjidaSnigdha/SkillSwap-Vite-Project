import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div className="border rounded">
      <h1 className="text-[#000000]/60 text-xl"> {skill.skillName}</h1>
      <img
        className="w-100 h-80 rounded-2xl mt-4 p-8"
        src={skill.image}
        alt=""
      />
      <div className="flex gap-18">
        <p>
          Provide by :{" "}
          <span className="text-[#00D390]">{skill.providerName}</span>
        </p>
        <p>{skill.rating}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
