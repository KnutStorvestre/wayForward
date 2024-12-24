import { Link } from "react-router-dom";
import Facebook from "../../assets/footer-logos/facebook-logo.png";
import Instagram from "../../assets/footer-logos/instagram-logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wideContainerFooter}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentLeft}>
            <Link to="/om-oss">
              <span>Om oss</span>
            </Link>
            <Link to="/partnere">
              <span>Partnere</span>
            </Link>
            <a href="mailto:post@wayforward.no">post@wayforward.no</a>
            <a href="tel:+47 404 06 098">+47 404 06 098</a>
          </div>
          <div className={styles.socialMedia}>
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
      </div>
    </footer>
  );
};

export default Footer;
