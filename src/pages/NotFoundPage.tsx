import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.description}>
        Beklager, siden du leter etter finnes ikke.
      </p>
      <Link to="/" className={styles.styledLink}>
        Gå til Hjem
      </Link>
    </div>
  );
};

export default NotFoundPage;
