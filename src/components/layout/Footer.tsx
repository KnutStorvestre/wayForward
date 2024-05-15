import "../styles/Footer.css";
import Facebook from "../../assets/logos/facebook-logo.png";
import Instagram from "../../assets/logos/instagram-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/om-oss">
            <span>Om oss</span>
          </Link>
          <Link to="/partnere">
            <span>Partnere</span>
          </Link>
          <a href="mailto:post@wayforward.no">post@wayforward.no</a>
          <a href="tel:+47 55 55 55 55">+47 55 55 55 55</a>
        </div>
        <div className="social-media">
          <a
            aria-label="Gå til WayForward sin Facebook-side"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook-logo" />
          </a>
          <a
            aria-label="Gå til WayForward sin Instagram-side"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
