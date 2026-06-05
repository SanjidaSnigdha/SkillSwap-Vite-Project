import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategorySkills = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(id, data)
    return (
        <div>
            Category Skills- {id}
        </div>
    );
};

export default CategorySkills;