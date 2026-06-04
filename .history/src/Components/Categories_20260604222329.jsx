import React, { use } from 'react';
const categoryPromise = fetch("/categories.json")
.then((res)=> res.json());

const categories = use(cate)

const Categories = () => {
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
        </div>
    );
};

export default Categories;