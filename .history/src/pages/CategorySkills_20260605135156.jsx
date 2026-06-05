import React from 'react';
import { useParams } from 'react-router';

const CategorySkills = () => {
    const { id } = useParams();
    console.log()
    return (
        <div>
            Category Skills
        </div>
    );
};

export default CategorySkills;