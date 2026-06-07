import React from 'react';
import img from '../assets/hero.jpg'
const Home = () => {
    return (
      <div>
        <h1 className='font-bold text'>Learn, Share & Grow Together</h1>
        <img className="w-full h-120 rounded mt-5" src={img} alt="" />
      </div>
    );
};

export default Home;