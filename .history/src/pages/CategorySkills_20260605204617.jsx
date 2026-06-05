import React from 'react';
import { useParams } from 'react-router';

const CategorySkills = () => {
    const { id } = useParams();
    const data
    console.log(id)
    return (
        <div>
            Category Skills- {id}
        </div>
    );
};

export default CategorySkills;