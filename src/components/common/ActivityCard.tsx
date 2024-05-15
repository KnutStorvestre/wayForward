import "../styles/ActivityCard.css";
import bergenImage from "../../assets/images/Bergen.png";
import calender from "../../assets/images/calender.png";
import people from "../../assets/images/people.png";

interface ActivityCardProps {
  activityTitle: string;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  time: string;
  ageGroup: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activityTitle,
  googleMapsLink,
  street,
  zipCode: postNumber,
  time,
  ageGroup,
  description,
}) => {
  return (
    <div>
      <div className="activity-card">
        <img src={bergenImage} alt="activity" className="activity-image" />
        <div className="activity-text">
          <h3 className="activity-title">{activityTitle}</h3>
          <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              <p className="address">{street}</p>
              <p className="address">{postNumber}</p>
            </a>
          </div>
          <div className="time">
            <img src={calender} alt="calender" />
            <p>{time}</p>
          </div>
          <div className="age-group">
            <img src={people} alt="people" />
            <p>{ageGroup}</p>
          </div>
          <p className="activity-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
