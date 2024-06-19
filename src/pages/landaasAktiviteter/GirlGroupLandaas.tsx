import ActivityPage from "../ActivityPage";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Med base på Sletten arrangerer vi jentegruppe annenhver torsdag for jenter
      som vil delta på aktiviteter sammen. Her er det fullt mulig å ta med
      venner eller komme alene. Det er to kvinnelige aktivitetsledere som jobber
      på denne aktiviteten, og varm mat serveres som oftest.
      `,
  },
  {
    isStrong: false,
    content: `
      Aktiviteter på huset varierer fra gang til gang, fra tegning, maling,
      baking, kakesalg, filmvisning, quiz og mye mer! Minst annenhver gang drar
      vi på utflukt til steder som badeland, Gokart, klatreparken Høyt og Lavt,
      skøyter, kino, restaurantbesøk, tivoli, bowling, “Fangene på fortet” og
      mye mye mer!  
      `,
  },
  {
    isStrong: false,
    content: `
      Vi ønsker å ha Slettens beste jentegruppe, og tar gjerne forslag fra alle
      deltakere om hva vi kan gjøre til neste gang. <3
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "Annenhver torsdag kl. 16:00 - 19:00" },
  { title: "Alder:", text: "13-20 år" },
  {
    title: "Påmelding:",
    text: "Kontakt Rasmus på 40 40 60 98 for info om påmelding og datoer for jentegruppen.",
  },
  { title: "Adresse:", text: "XXXX" },
];

const centerMarker = { lat: 60.36165554826739, lng: 5.363863074396288 };

const GirlGroup: React.FC = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Jentegruppe"
    location="Landås"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    renderMapBool={false}
    centerMarker={centerMarker}
  />
);

export default GirlGroup;
