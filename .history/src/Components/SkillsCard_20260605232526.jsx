import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";


const SkillsCard = ({ skill }) => {
  return (
    <div className="border rounded">
      <h1 className="text-[#000000] font-bold text-center mt-4">
        {" "}
        {skill.skillName}
      </h1>
      <img
        className="w-full mx-auto rounded-2xl p-4 items-center"
        src={skill.image}
        alt=""
      />
      <div className="flex justify-between p-3">
        <p>
          Provide by :{" "}
          <span className="text-[#00D390]">{skill.providerName}</span>
        </p>
        <p className="flex gap-1 text-[#FF8811]">
          <MdOutlineStarPurple500 size={20} />
          {skill.rating}
        </p>
        <div></div>
        <a><button>See more</button></a>
      </div>
    </div>
  );
};

export default SkillsCard;
