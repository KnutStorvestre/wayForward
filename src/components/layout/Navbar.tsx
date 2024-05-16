import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={` ${visible ? "nav" : "hidden"}`}>
      <HamburgerMenu />
      <div className="site-title">
        <Link to="/">WayForward</Link>
      </div>
    </nav>
  );
};

export default Navbar;
