import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="hamburger-menu">
        <button
          onClick={toggleMenu}
          className={`menu-btn ${isOpen ? "active" : ""}`}
        ></button>
      </label>
      <aside className="menu">
        <nav onClick={toggleMenu}>
          <div>
            <Link to="/">WayForward</Link>
          </div>
          <div>
            <Link to="/om-oss">Om oss</Link>
          </div>
          <div>
            <Link to="/Landaas">Landås</Link>
          </div>
          <div>
            <Link to="/Sotra">Sotra</Link>
          </div>
          <div>
            <Link to="/Leie">Leie</Link>
          </div>
          <div>
            <Link to="/Partnere">Partnere</Link>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default HamburgerMenu;
