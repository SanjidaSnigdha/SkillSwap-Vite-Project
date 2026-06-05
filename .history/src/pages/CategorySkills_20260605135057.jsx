import React from 'react';
import { useParams } from 'react-router';

const CategorySkills = () => {
    const obj = useParams();
    console.log(obj)
    return (
        <div>
            Category Skills
        </div>
    );
};

export default CategorySkills;