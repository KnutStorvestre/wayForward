import styles from "./styles/RentalChoice.module.css";
import RentalCard from "../components/common/RentalCard";
import rentalCardsData from "../data/RentalCardsData";

const RentalChoice = () => {
  return (
    <div className="page-container padding-top-7rem padding-bottom-90">
      <TopText />
      <div className={styles.centerContent}>
        <div className={styles.activityCards}>
          {rentalCardsData.map((activity, index) => (
            <RentalCard
              key={index}
              title={activity.activityTitle}
              location={activity.location}
              image={activity.image}
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
    <div className={styles.topText}>
      <h1 className="extra-bold-inter">Utleie/Utlån av lokaler</h1>
      <p className="semi-bold-inter">
        Vi tilbyr en rekke lokaler og utstyr for utleie for å støtte
        samfunnsarrangementer og aktiviteter. Våre fasiliteter er velholdte og
        utstyrt for å møte dine behov, enten du arrangerer en workshop, et møte
        eller en feiring. Kontakt oss for å lære mer om våre utleiemuligheter og
        tilgjengelighet.
      </p>
    </div>
  );
}

export default RentalChoice;
