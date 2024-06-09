import ActivityPage, { InfoLine } from "./ActivityPage";
import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const fridayClubDescription = (
  <>
    <p className={styles.strongTextParagraph}>
      Velkommen til vår fredagsklubb på Femmeren. Her kan barn og ungdom komme
      for å henge ut, møte venner og delta på forskjellige aktiviteter på huset.
      Det blir servert varm mat hver gang, som oftest vegetar.
    </p>
    <p className={styles.lightTextParagraph}>
      Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis, foosball
      turnering, Kahoot, Bingo, Uno og mye mer. Om været er fint åpner vi opp
      for uteaktiviteter som slåball, badminton, fotballturneringer på
      Slettebakken skole eller liknende.
    </p>
    <p className={styles.lightTextParagraph}>
      En gang i måneden drar fredagsklubben på utflukt til steder som Rush,
      gokart Sartort, Megazone, Fangene på fortet, skøyter, badeland, bowling og
      mye mer.
    </p>
    <p className={styles.lightTextParagraph}>
      Det er svært stor pågang på fredagsklubben og vi kan ikke ta imot flere
      enn 30 personer hver fredag. Alle får derfor plass ca. annenhver uke.
    </p>
  </>
);

const fridayClubInfoBoxLines: InfoLine[] = [
  { title: "Tidspunkt:", text: "Fredag kl. XXXXXX" },
  { title: "Aldersgruppe:", text: "6 - 19 år" },
  {
    title: "Påmelding:",
    text: "Ring eller send 'FREDAGSKLUBB' på SMS til 40 40 60 98.",
  },
  { title: "Adresse:", text: "XXXX" },
];

const FridayClub: React.FC = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    title="Fredagsklubb"
    location="Landås"
    description={fridayClubDescription}
    infoBoxLines={fridayClubInfoBoxLines}
  />
);

export default FridayClub;
