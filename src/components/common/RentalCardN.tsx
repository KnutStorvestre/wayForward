import { Link } from "react-router-dom";
import styles from "../styles/RentalCardN.module.css";

interface RentalCardProps {
  title: string;
  location: string;
  image: {
    url: string;
    alt: string;
  };
  description: string;
  linkBuilding: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  title,
  location,
  image,
  description,
  linkBuilding,
}) => {
  return (
    <div>
      <Link to={linkBuilding} className={styles.cardLink}>
        <div className={styles.card}>
          <img src={image.url} alt={image.alt} className={styles.image} />
          <div className={styles.text}>
            <p className={styles.title}>{title}</p>
            <p className={styles.location}>{location}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentalCard;
