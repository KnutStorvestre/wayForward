import "./ActivityCard.css";
import bergenImage from "../assets/Bergen.png";
import calender from "../assets/calender.png";
import people from "../assets/people.png";

// postnumber and street address
interface ActivityCardProps {
  activityTitle: string;
  postnumber: string;
  street: string;
  time: string;
  ageGroup: string;
  description: string;
}

export default function ActivityCard() {
  return (
    <div>
      <div className="activity-card">
        <img src={bergenImage} alt="activity" className="activity-image" />
        <div className="activity-text">
          <h3 className="activity-title">Leksehjelp</h3>
          <div>
            <a
              href="https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18.04z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="address">museplassen 3</p>
              <p className="address">5007 Bergen</p>
            </a>
          </div>
          <div className="time">
            <img src={calender} alt="calender" />
            <p>Mandag 14:00 - 16:00</p>
          </div>
          <div className="age-group">
            <img src={people} alt="people" />
            <p>1 - 4 klasse</p>
          </div>
          <p className="activity-description">
            Dette er et åpent tilbud for alle barn i Årstad bydel. Husk å ta med
            klær for å leke ute.
          </p>
        </div>
      </div>
    </div>
  );
}
