import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/">
            <img src={logo} alt="" className='w-14 h-14 object-contain'/>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/About" className={({isActive})=>(isActive ? "text-blue-600" :"text-black")}>
                About
            </NavLink>
            <NavLink to="/Projects" className={({isActive})=>(isActive ? "text-blue-600" :"text-black")}>
                Projects
            </NavLink>
            <NavLink to="/Contact" className={({isActive})=>(isActive ? "text-blue-600" :"text-black")}>
                Contact
            </NavLink>
        </nav>
    </header>
  );
};

export default Navbar