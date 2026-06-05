import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorySkills, setCategorySkills] = useState([]);

  useEffect(() => {
      if
  }, []);
  return <div> Skills</div>;
};

export default CategorySkills;
