import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        SoftLand
      </div>
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="active">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          
          {/* Dropdown Menu */}
          <li className="dropdown">
            <span className="dropdown-title">
              Dropdown <span className="arrow">▼</span>
            </span>
            <div className="dropdown-content">
              <a href="#drop1">Drop 1</a>
              <a href="#drop2">Drop 2</a>
            </div>
          </li>

          <li>
            <navlink href="#contact">Contact</navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;