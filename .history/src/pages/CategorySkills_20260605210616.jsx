import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const filterSkills = data.filter((skills) => skills.skillId == skillId);
    console.log(filterSkills);
  }, [data,skillId]);
  return <div>Category Skills- {skillId}</div>;
};

export default CategorySkills;
