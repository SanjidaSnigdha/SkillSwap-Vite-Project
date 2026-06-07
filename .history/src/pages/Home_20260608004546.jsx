import React from 'react';
import img from '../assets/hero.jpg'
const Home = () => {
    return (
      <div>
        <h1 className="font-bold text-center">Learn, Share & Grow Together</h1>
        <img className="w-full h-120 rounded mt-5" src={img} alt="" />
        <p className='mt-'>
          Connect with local experts, exchange valuable skills, and unlock new
          opportunities for personal and professional growth.
        </p>
      </div>
    );
};

export default Home;