import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const disableScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.body.addEventListener("touchmove", disableScroll, {
        passive: false,
      });
    } else {
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.body.removeEventListener("touchmove", disableScroll);
    };
  }, [isOpen]);

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
            <Link to="/Landaas-aktiviteter">Landås aktiviteter</Link>
          </div>
          <div>
            <Link to="/sotra-aktiviteter">Sotra aktiviteter</Link>
          </div>
          <div>
            <Link to="/Utleie">Utleie/Utlån av lokaler</Link>
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
