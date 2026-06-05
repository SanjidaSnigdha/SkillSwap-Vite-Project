import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategorySkills = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categorySkills, setCategorySkills] = useState([]);

  useEffect(() => {
      if(id=="0") {
        setCategorySkills(data);
      } else {
        const filtered
      }
  }, [id, data]);
  return <div> Skills</div>;
};

export default CategorySkills;
