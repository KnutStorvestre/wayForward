import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { SectionHeader } from "../Util";

const FridayClub = () => {
  return (
    <div className="page-container padding-top-7rem">
      <div className="max-width-container">
        <img
          src={homeworkImg}
          alt="Large top image"
          className={styles.largeImage}
        />
        <div className="text-container horizontal-padding">
          <p className={styles.topText}>
            <span className={styles.mainHeader}>Fredagsklubb,</span>
            <span className={styles.location}> Landås</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongTextParagraph}>
              Velkommen til vår fredagsklubb på Femmeren. Her kan barn og ungdom
              komme for å henge ut, møte venner og delta på forskjellige
              aktiviteter på huset. Det blir servert varm mat hver gang, som
              oftest vegetar.
            </p>
            <p className={styles.lightTextParagraph}>
              Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis,
              foosball turnering, Kahoot, Bingo, Uno og mye mer. Om været er
              fint åpner vi opp for uteaktiviteter som slåball, badminton,
              fotballturneringer på Slettebakken skole eller liknende.
            </p>
            <p className={styles.lightTextParagraph}>
              En gang i måneden drar fredagsklubben på utflukt til steder som
              Rush, gokart Sartort, Megazone, Fangene på fortet, skøyter,
              badeland, bowling og mye mer.
            </p>
            <p className={styles.lightTextParagraph}>
              Det er svært stor pågang på fredagsklubben og vi kan ikke ta imot
              flere enn 30 personer hver fredag. Alle får derfor plass ca.
              annenhver uke.
            </p>
            <p className={styles.lightTextParagraph}>
              Send “FREDAGSKLUBB” på SMS til 40 40 60 98 om du eller dine barn
              ønsker å delta. Man får plass ca. annenhver uke.
            </p>
          </div>
          <SectionHeader title="Info" />
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <SectionHeader title="Kart" />
      </div>
    </div>
  );
};

export default FridayClub;
