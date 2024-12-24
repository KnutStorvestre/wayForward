import homeworkImg from "../../assets/activities/sotra/homework-books.jpg";
import ActivityPage from "../ActivityPage";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Velkommen til vår Ungdomskafé på Kraftsenter for aktivitet.
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
      Innimellom drar Ungdomskaféen på utflukt til steder som Rush,
      Gokart Sartor, Megazone, Fangene på fortet, skøyter, badeland,
      bowling og mye mer.
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "kl. 17:00 - 20:00" },
  { title: "Aldersgruppe:", text: "13 - 20 år" },
  { title: "Pris:", text: "Gratis" },
  { title: "Påmelding:", text: "Det er bare å møte opp." },
  { title: "Adresse:", text: "Grønamyrvegen 6, 5353 Sotra" },
];

const centerMarker = { lat: 60.3596836, lng: 5.1236062 };

const YouthCafe = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Ungdomskafé"
    location="Sotra"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    longLatMarker={centerMarker}
  />
);

export default YouthCafe;
