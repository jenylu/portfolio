import '../styles/NavigationHeader.css';

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Hamburger from 'hamburger-react'

import logo from '../Signature.jpg'; // Import the image

function NavigationHeader() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img className="logo" src={logo} alt="Jennifer Lu"></img>
      </a>
      <div className="hamburger">
        <Hamburger size={20} toggled={isNavExpanded} toggle={setIsNavExpanded} />
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <NavLink to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              onClick={handleClick} >
              Illustration
            </NavLink>
          </li>
          <li>
            <NavLink to="/comics"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              onClick={handleClick}>
              Comics
            </NavLink>
          </li>
          <li>
            <a className="nav-link" href="https://www.etsy.com/shop/lunaludraws" target="_blank">
              Store
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://faire.com/direct/lunaludraws" target="_blank">
              Faire Direct
            </a>
          </li>
          <li>
            <NavLink to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li>
            <a className="nav-link" href="https://www.instagram.com/lunaludraws" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="mr-1" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationHeader;

