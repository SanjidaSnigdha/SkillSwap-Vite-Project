import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.skillId}
            className={"bg-base-100 hover:bg-base-200 rounded p-2 w-60 font-semibold text-[#"}
            to={`/category/${category.skillId}`}
          >
            {category.skillName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
