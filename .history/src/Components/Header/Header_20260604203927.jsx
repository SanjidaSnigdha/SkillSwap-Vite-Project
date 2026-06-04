import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
         <div className='nav'>
        <NavLink to="/">Home</NavLink>  
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/">Skills</NavLink> </div> 
        </div>
    );
};

export default Header;