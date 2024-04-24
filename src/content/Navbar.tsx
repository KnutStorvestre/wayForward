import { Link } from "react-router-dom";
import "../styes.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Homes</Link>
      <ul>
        <Link to="/Landaas">Landaas</Link>
      </ul>
    </nav>
  );
}
