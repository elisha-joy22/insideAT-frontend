import React from 'react';
import { Link } from 'react-router-dom';
import './BottomLayerNavbar.css'; // Import the specific styles for BottomLayerNavbar

const BottomLayerNavbar = () => {
  return (
    <div className='bottom-layer-navbar'>
      <ul className="left-navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
      <div className="center-space"></div>
      <ul className="right-navbar-links">
        <li>
          <Link to="/complaints">Complaints</Link>
        </li>
        <li>
          <Link to="/gratitudes">Gratitudes</Link>
        </li>
        <li>
          <Link to="/tech_talks">Tech Talks</Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomLayerNavbar;
