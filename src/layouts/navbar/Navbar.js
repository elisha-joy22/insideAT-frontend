import React from 'react';
import TopLayerNavbar from './TopLayerNavbar';
import BottomLayerNavbar from './BottomLayerNavbar';
import './Navbar.css'; // Import the common Navbar CSS

const Navbar = () => {
  return (
    <div className='navbar'>
      <TopLayerNavbar />
      <BottomLayerNavbar />
    </div>
  );
};

export default Navbar;
