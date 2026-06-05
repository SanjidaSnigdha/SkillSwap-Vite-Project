import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorySkills, setCategorySkills] = useState([]);

  useEffect(() => {
    const filterSkills = data.filter((skills) => skills.skillId == id);
    console.log(filterSkills);
    setCategorySkills(fil)
  }, [data,id]);
  return <div>Category Skills- {id}</div>;
};

export default CategorySkills;
