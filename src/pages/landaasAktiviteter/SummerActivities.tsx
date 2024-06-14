import ActivityPage from "../ActivityPage";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
    Sommeren 2024 skal Way Forward arrangere masse forskjellige aktiviteter mandag-fredag
    i uke 27 og 28. Disse ti dagene skal fylles med gårdsbesøk, grilling, fotballturneringer,
    besøk til Rush, badeland, split bowling, Vil Vite, idrettsdag på Skansemyren,
    Megazone og mye mer!
      `,
  },
];

const infoLines: InfoLines = [
  {
    title: "Tidspunkt:",
    text: " 24. - 28. juni og 01. - 05. juli, kl. 12:00 - 16:00",
  },
  { title: "Aldersgruppe:", text: "  6 - 19 år" },
  { title: "Aldersgruppe:", text: "  Gratis" },
  {
    title: "Påmelding:",
    text: `Send “SOMMERAKTIVITETER 2024” på SMS til Rasmus 40 40 60 98 for mer info og påmelding.`,
  },
  { title: "Adresse:", text: "Femmeren (Joachim Lampes Vei 5, 5089 Bergen)" },
];

const centerMarker = { lat: 60.3616738, lng: 5.3612205 };

const HomeWorkHelp = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Sommeraktiviteter 2024"
    location="Landås"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    renderMapBool={true}
    centerMarker={centerMarker}
  />
);

export default HomeWorkHelp;
