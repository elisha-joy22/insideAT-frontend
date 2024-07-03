import React from 'react';
import logo from '../../assets/images/logo.png'; // Adjust the path according to your project structure
import './TopLayerNavbar.css'; // Import the specific styles for TopLayerNavbar

const TopLayerNavbar = () => {
  return (
    <div className='top-layer-navbar'>
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navbar-links">
        <li>
          <a href="/">Top Link 1</a>
        </li>
        <li>
          <a href="/">Top Link 2</a>
        </li>
        <li>
          <a href="/">Top Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default TopLayerNavbar;
