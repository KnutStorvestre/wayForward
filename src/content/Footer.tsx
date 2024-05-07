import "./styles/Footer.css";
import Facebook from "../assets/facebookLogo.png";
import Instagram from "../assets/instagramLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>Om oss</p>
          <p>Partnere</p>
          <p>post@wayforward.no</p>
          <p>Telefon: 55 55 55 55</p>
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
