import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={`${styles.notFoundContainer} padding-top-7rem`}>
      <h1 className={styles.heading}>404 Not Found</h1>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.styledLink}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
