import { Link } from "react-router-dom";
import styles from "../styles/HomeCard.module.css";

interface CardProps {
  image: string;
  title: string;
  text: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ image, title, text, path }) => {
  return (
    <Link className={styles.noUnderline} to={path}>
      <div className={styles.homeCard}>
        <img src={image} alt={title} className={styles.homeCardImage} />
        <div className={styles.homeCardContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
