import styles from "./styles/RentalChoice.module.css";
import RentalCard from "../components/common/RentalCard";
import RentalCardN from "../components/common/RentalCardN";
import rentalCardsData from "../data/RentalCardsData";

const RentalChoice = () => {
  return (
    <div className="page-container padding-top-7rem padding-bottom-90">
      <TopText />
      <div className={styles.centerContent}>
        <div className={styles.activityCards}>
          {rentalCardsData.map((activity, index) => (
            <RentalCardN
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error,
        iste vel commodi possimus rem accusantium numquam consectetur magni id
        hic ullam blanditiis adipisci labore debitis voluptatem ab porro
        officiis consequatur. Tempore ipsum incidunt blanditiis molestias et
      </p>
    </div>
  );
}

export default RentalChoice;
