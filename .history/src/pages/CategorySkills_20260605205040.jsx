import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategorySkills = () => {
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(()=>{
  const filterSkills = data.filter(skills=>skills.)
    }, [])
    return (
        <div>
            Category Skills- {id}
        </div>
    );
};

export default CategorySkills;