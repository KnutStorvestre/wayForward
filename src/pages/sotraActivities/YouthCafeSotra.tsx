import homeworkImg from "../../assets/images/homework-books.jpg";
import ActivityPage from "../ActivityPage";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Velkommen til vår ungdomscafé på Kraftsenter for aktivitet.
      Her kan ungdom fra 13 og oppover komme for å henge ut,
      møte venner og delta på forskjellige aktiviteter på huset.
      Det blir servert varm mat hver gang.
      `,
  },
  {
    isStrong: false,
    content: `
      Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis,
      foosball turnering, Kahoot, Bingo, Uno og mye mer. Om været er
      fint åpner vi opp for uteaktiviteter som fotballturneringer på
      Sotra arena eller liknende.
      `,
  },
  {
    isStrong: false,
    content: `
      Innimellom drar ungdomscaféen på utflukt til steder som Rush,
      Gokart Sartor, Megazone, Fangene på fortet, skøyter, badeland,
      bowling og mye mer.
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "XXXXX" },
  { title: "Aldersgruppe:", text: "13 - 20 år" },
  { title: "Pris:", text: "Gratis" },
  { title: "Påmelding:", text: "Det er bare å møte opp." },
  { title: "Adresse:", text: "XXXX" },
];

const centerMarker = { lat: 60.3616738, lng: 5.3612205 };

const YouthCafe = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Ungdomscafé"
    location="Sotra"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    renderMapBool={false}
    centerMarker={centerMarker}
  />
);

export default YouthCafe;
