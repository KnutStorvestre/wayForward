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
        Vi leier ut våre to lokaler til barnerelaterte feiringer for de som bor
        i nærområdet både på Landås og Sotra. Klikk deg videre for å sjekke
        adresse, fasiliteter, bilder og tilgjengelighet for lokalene.
      </p>
    </div>
  );
}

export default RentalChoice;
