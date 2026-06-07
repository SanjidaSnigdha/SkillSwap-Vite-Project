import React from 'react';
import img from '../assets/hero.jpg'
const Home = () => {
    return (
      <div>
        <h1 className='font-bold'>Learn, Share & Grow Together</h1>
        <img className="w-full h-120 rounded mt-4" src={img} alt="" />
      </div>
    );
};

export default Home;