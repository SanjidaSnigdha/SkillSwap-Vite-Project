import React from 'react';

const SkillDetailsCard = ({skill}) => {
    console.log(skill)
    return (
        <div>
            <h2 className='text-'>{skill.title}</h2>
        </div>
    );
};

export default SkillDetailsCard;