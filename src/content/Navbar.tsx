import { Link } from "react-router-dom";
import "../styes.css";

export default function Navbar() {
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
}
