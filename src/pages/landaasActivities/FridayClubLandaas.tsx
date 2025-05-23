import ActivityPage from "../ActivityPage";
import homeworkImg from "../../assets/rasmus-images/fredagsklubb-sotra-0-ratio-large.jpg";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Velkommen til vår fredagsklubb på Femmeren. Her kan barn og ungdom komme
      for å henge ut, møte venner og delta på forskjellige aktiviteter på huset.
      Det blir servert varm mat hver gang, som oftest vegetar.
      `,
  },
  {
    isStrong: false,
    content: `
      Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis, foosball
      turnering, Kahoot, Bingo, Uno og mye mer. Om været er fint åpner vi opp
      for uteaktiviteter som slåball, badminton, fotballturneringer på
      Slettebakken skole eller liknende.
      `,
  },
  {
    isStrong: false,
    content: `
      En gang i måneden drar fredagsklubben på utflukt til steder som Rush,
      gokart Sartort, Megazone, Fangene på fortet, skøyter, badeland, bowling og
      mye mer.
      `,
  },
  {
    isStrong: false,
    content: `
      Det er svært stor pågang på fredagsklubben og vi kan ikke ta imot flere
      enn 30 personer hver fredag. Alle får derfor plass ca. annenhver uke.
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "Fredag kl. 16:00 - 19:00" },
  { title: "Aldersgruppe:", text: "6 - 19 år" },
  {
    title: "Påmelding:",
    text: "Ring eller send 'FREDAGSKLUBB' på SMS til 40 40 60 98.",
  },
  { title: "Adresse:", text: "Femmeren (Joachim Lampes Vei 5, 5089 Bergen)" },
];

const centerMarker = { lat: 60.36165554826739, lng: 5.363863074396288 };

const FridayClub: React.FC = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Fredagsklubb"
    location="Landås"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    longLatMarker={centerMarker}
  />
);

export default FridayClub;
