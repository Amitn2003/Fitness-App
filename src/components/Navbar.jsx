import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><NavLink to="/">FitZ</NavLink> </h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/features" className="hover:text-blue-300">Features</NavLink></li>
          
          <li><NavLink to="/about" className="hover:text-blue-300">About Us</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>
          <li><NavLink to="/register" className="hover:text-blue-300" >Register</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
