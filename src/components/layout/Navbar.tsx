import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="nav">
      <HamburgerMenu />
      <div className="site-title">
        <Link to="/">WayForward</Link>
      </div>
    </nav>
  );
};

export default Navbar;
