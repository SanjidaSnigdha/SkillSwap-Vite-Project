import React from 'react';
import { NavLink } from 'react-router';
import navImg from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto mt-5'>
            <div className='flex items-center gap-1'>
          <img className='w-25 h-25' src={navImg} alt="" />
          <h1 className='text-3xl font-bold'>Skill<span>Swap</span></h1>
            </div>
         <div className='nav justify-between'>
        <NavLink to="/">Home</NavLink>  
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/skills">Skills</NavLink>
        </div>
        <div className='login-btn'>
          <button className='btn btn-primary w-20'>Login</button>  
        </div> 
        </div>
    );
};

export default Header;