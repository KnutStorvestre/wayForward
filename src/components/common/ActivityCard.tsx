import React from "react";
import styles from "../styles/ActivityCard.module.css"; // Import CSS module
import calender from "../../assets/activities/shared/calender.png";
import people from "../../assets/activities/shared/people.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  activityTitle: string;
  link: string;
  time: string;
  ageGroup: string;
  description: string;
  image: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activityTitle,
  link,
  time,
  ageGroup,
  description,
  image,
}) => {
  return (
    <div>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <img src={image} alt="activity" className={styles.image} />
          <div className={styles.text}>
            <p className={styles.title}>{activityTitle}</p>
            <div className={styles.timeAge}>
              <div className={styles.time}>
                <img src={calender} alt="calender" />
                <p>{time}</p>
              </div>
              <div className={styles.ageGroup}>
                <img src={people} alt="people" />
                <p>{ageGroup}</p>
              </div>
            </div>
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

export default ActivityCard;
