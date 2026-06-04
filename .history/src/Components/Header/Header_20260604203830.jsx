import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
         <div>
             <NavLink to="/">Home</NavLink>  
          <NavLink to="/">About</NavLink>  
          <NavLink to="/">Home</NavLink> </div> 
        </div>
    );
};

export default Header;