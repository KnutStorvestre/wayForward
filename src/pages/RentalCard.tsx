import "./styles/RentalCard.css";
import bergenImage from "../assets/Bergen.png";

interface RentalCardProps {
  activityTitle: string;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  description: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  activityTitle,
  googleMapsLink,
  street,
  zipCode: postNumber,
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
          <p className="activity-description">{description}</p>
          <div className="bottom-info">
            <div className="contact-info">
              <span>Kontakt: Rasmus Solberg</span>
              <span>tlf: +47 555 55 555</span>
              <span>e-post: post@wayforward.com</span>
            </div>
            <div className="button-container">
              <button className="button">Les mer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
