import React from 'react';
import { useParams } from 'react-router';

const CategorySkills = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            Category Skills- {id}
        </div>
    );
};

export default CategorySkills;