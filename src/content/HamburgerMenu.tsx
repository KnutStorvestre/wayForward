import { useState } from "react";
import "./styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="hamburger-menu" onClick={toggleSidebar}>
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div>This</div>
          <div>Is</div>
          <div>The</div>
          <div>Sidebar</div>
        </nav>
      </aside>
    </div>
  );
};

export default HamburgerMenu;
