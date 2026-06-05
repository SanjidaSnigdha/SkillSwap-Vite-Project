import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const []

  useEffect(() => {
    const filterSkills = data.filter((skills) => skills.skillId == id);
    console.log(filterSkills);
  }, [data,id]);
  return <div>Category Skills- {id}</div>;
};

export default CategorySkills;
