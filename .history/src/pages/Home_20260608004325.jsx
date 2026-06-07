import React from 'react';
import img from '../assets/hero.jpg'
const Home = () => {
    return (
      <div>
        <h1>Learn, Share & Grow Together</h1>
        <img className="w-full h-120 rounded" src={img} alt="" />
      </div>
    );
};

export default Home;