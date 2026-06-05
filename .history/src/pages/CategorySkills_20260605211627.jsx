import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorySkills, setCategorySkills] = useState([]);

  useEffect(() => {
    const filterSkills = data.filter((skills) => skills.skillId == id);
    console.log(filterSkills);
    setCategorySkills(filterSkills);
  }, [data,id]);
  return <div> Skills Found</div>;
};

export default CategorySkills;
