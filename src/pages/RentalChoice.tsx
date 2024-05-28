import "./styles/RentalChoice.css";
import RentalCard from "../components/common/RentalCard";
import rentalCardsData from "../data/RentalCardsData";

const Rental = () => {
  return (
    <div className="page-container padding-top-4rem">
      <TopText />
      <div className="center-content">
        <div className="rental-cards">
          {rentalCardsData.map((activity, index) => (
            <RentalCard
              key={index}
              activityTitle={activity.activityTitle}
              image={activity.image}
              googleMapsLink={activity.googleMapsLink}
              street={activity.street}
              zipCode={activity.zipCode}
              description={activity.description}
              linkBuilding={activity.linkBuilding}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function TopText() {
  return (
    <div className="top-text">
      <h1 className="extra-bold-inter">Utleie/Utlån av lokaler</h1>
      <p className="semi-bold-inter">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error,
        iste vel commodi possimus rem accusantium numquam consectetur magni id
        hic ullam blanditiis adipisci labore debitis voluptatem ab porro
        officiis consequatur. Tempore ipsum incidunt blanditiis molestias et
      </p>
    </div>
  );
}

export default Rental;
