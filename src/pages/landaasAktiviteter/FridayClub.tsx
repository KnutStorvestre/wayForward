import styles from "../styles/HomeworkHelp.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

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
            <p className={styles.strongText}>
              Velkommen til vår fredagsklubb på Femmeren. Her kan barn og ungdom
              komme for å henge ut, møte venner og delta på forskjellige
              aktiviteter på huset. Det blir servert varm mat hver gang, som
              oftest vegetar.
            </p>
            <p className={styles.lightText}>
              Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis,
              foosball turnering, Kahoot, Bingo, Uno og mye mer. Om været er
              fint åpner vi opp for uteaktiviteter som slåball, badminton,
              fotballturneringer på Slettebakken skole eller liknende.
            </p>
            <p className={styles.lightText}>
              En gang i måneden drar fredagsklubben på utflukt til steder som
              Rush, gokart Sartort, Megazone, Fangene på fortet, skøyter,
              badeland, bowling og mye mer.
            </p>
            <p className={styles.lightText}>
              Det er svært stor pågang på fredagsklubben og vi kan ikke ta imot
              flere enn 30 personer hver fredag. Alle får derfor plass ca.
              annenhver uke.
            </p>
            <p className={styles.lightText}>
              Send “FREDAGSKLUBB” på SMS til 40 40 60 98 om du eller dine barn
              ønsker å delta. Man får plass ca. annenhver uke.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <InfoBoxHeader title="Info" />
        Aldersgruppe eks: 1.-4. klasse og møte tidspunkt
        <InfoBoxHeader title="Kart" />
      </div>
    </div>
  );
};

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => (
  <div>
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
      <h1 className={styles.headerTitle}>{title}</h1>
      <hr className={styles.headerLine} />
    </div>
  </div>
);

export default FridayClub;
