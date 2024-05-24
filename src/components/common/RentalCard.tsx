import "../styles/RentalCard.css";
import { Link } from "react-router-dom";
import { RentalCardData } from "../../types";

const RentalCard: React.FC<RentalCardData> = ({
  activityTitle,
  image,
  googleMapsLink,
  street,
  zipCode: postNumber,
  description,
  contactInfo,
  linkBuilding,
}) => {
  return (
    <div>
      <div className="rental-card">
        <img src={image.url} alt={image.alt} className="activity-image" />
        <div className="top-bottom">
          <div>
            {" "}
            <div className="rental-card-text">
              <h3 className="rental-card-title">{activityTitle}</h3>
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
              <p>{description}</p>
            </div>
          </div>
          <div className="bottom-info">
            <div className="contact-info">
              <span>Kontakt: {contactInfo.contactName}</span>
              <span>tlf: {contactInfo.phoneNumber}</span>
              <span>e-post: {contactInfo.email}</span>
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
