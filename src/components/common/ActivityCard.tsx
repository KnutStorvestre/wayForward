import "../styles/ActivityCard.css";
import bergenImage from "../../assets/images/Bergen.png";
import calender from "../../assets/images/calender.png";
import people from "../../assets/images/people.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  time,
  ageGroup,
  description,
}) => {
  return (
    <div>
      <Link to="/landaas-aktiviteter/leksehjelp" className="card-activity-link">
        <div className="card-activity">
          <img src={bergenImage} alt="activity" className="image-activity" />
          <div className="text-activity">
            <p className="title-activity">{activityTitle}</p>
            <div className="time-age-activity">
              <div className="time">
                <img src={calender} alt="calender" />
                <p>{time}</p>
              </div>
              <div className="age-group">
                <img src={people} alt="people" />
                <p>{ageGroup}</p>
              </div>
            </div>
            <p className="description-activity">{description}</p>
            <div className="bottom-arrow-activity">
              <ArrowRight className="arrow-icon" color="black" size={24} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActivityCard;
