import "../styles/RentalCard.css";
/*import bergenImage from "../assets/troldhaugenx.jpeg";*/
import { Link } from "react-router-dom";

interface RentalCardProps {
  activityTitle: string;
  image: string;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  description: string;
  linkBuilding: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  activityTitle,
  image,
  googleMapsLink,
  street,
  zipCode: postNumber,
  description,
  linkBuilding,
}) => {
  return (
    <div>
      <div className="activity-card">
        <img src={image} alt="activity" className="activity-image" />
        <div className="top-bottom">
          <div>
            {" "}
            <div className="activity-text">
              <h3 className="activity-title">{activityTitle}</h3>
              <div className="flex-row">
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-column">
                    <span className="address">{street}</span>
                    <span className="address">{postNumber}</span>
                  </div>
                </a>
              </div>
              <p className="activity-description">{description}</p>
            </div>
          </div>
          <div className="bottom-info">
            <div className="contact-info">
              <span>Kontakt: Rasmus Solberg</span>
              <span>tlf: +47 555 55 555</span>
              <span>e-post: post@wayforward.com</span>
            </div>
            <Link to={linkBuilding}>
              <button className="button">Les mer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
