import { Link } from "react-router-dom";
import { RentalCardData } from "../../types";
import styles from "../styles/RentalCard.module.css";

const RentalCard: React.FC<RentalCardData> = ({
  activityTitle,
  image,
  description,
  linkBuilding,
}) => {
  return (
    <div className={styles.rentalCardContainer}>
      <div className={styles.rentalCard}>
        <img src={image.url} alt={image.alt} />
        <div className={styles.topBottom}>
          <div>
            <div className={styles.rentalCardText}>
              <h3 className={styles.rentalCardTitle}>{activityTitle}</h3>{" "}
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <Link to={linkBuilding}>
              <button className={styles.button}>Les mer</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
