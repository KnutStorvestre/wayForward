import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Homes</Link>
      <ul>
        <li>
          <Link to="/Landaas">Landaas</Link>
        </li>
        <li>
          <Link to="/Leie">Leie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*
import React, { useState } from "react";
import "./styles/Navbar.css"; // Make sure to create this CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* This is a common icon used for hamburger menus }
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
