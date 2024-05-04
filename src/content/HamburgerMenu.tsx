import { useState } from "react";
import "./styles/HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="hamburger-menu" onClick={toggleMenu}>
        <input type="checkbox" />
      </label>
      <aside className="menu">
        <nav>
          <div>
            <Link to="/">WayForward</Link>
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
