import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillsCard from "../Components/SkillsCard";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorySkills, setCategorySkills] = useState([]);

  useEffect(() => {
      if(id=="0") {
        setCategorySkills(data);
      } else {
        const filteredNews = data.filter((skills) => skills.skillId == id);

        setCategorySkills(filteredNews);
      }
  }, [id, data]);
  return (
  <div>
     <h1 className="font-bold mb-5">Popular Skills</h1>
     <div className="grid grid-cols-1 gap-5">
        {
            CategorySkills.map(skills=><SkillsCard></SkillsCard> )
        }

     </div>
   
  </div>;
  );
};


export default CategorySkills;
