import React from 'react';
const categoryPromise = fetch("/categories.json")
<div className="then"></div>

const Categories = () => {
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
        </div>
    );
};

export default Categories;