import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import styles from "../styles/Navbar.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <HamburgerMenu />
      <div className={styles.siteTitle}>
        <Link to="/">WayForward</Link>
      </div>
    </nav>
  );
};

export default Navbar;
