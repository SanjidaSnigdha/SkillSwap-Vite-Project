import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { skillId } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const filterSkills = data.filter((skills) => skills.skillId == skillId);
    console.log(filterSkills);
  }, [data,skil]);
  return <div>Category Skills- {skillId}</div>;
};

export default CategorySkills;
