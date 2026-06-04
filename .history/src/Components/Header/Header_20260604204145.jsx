import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
         <div className='nav'>
        <NavLink to="/">Home</NavLink>  
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/skills">Skills</NavLink>
        </div>
        <div></div> 
        </div>
    );
};

export default Header;