import { Link } from "react-router-dom";
import styles from "../styles/RentalCardHome.module.css";
import { ArrowRight } from "lucide-react";

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
            <div className={styles.bottomArrow}>
              <ArrowRight
                className={styles.arrowIcon}
                color="black"
                size={24}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentalCard;
