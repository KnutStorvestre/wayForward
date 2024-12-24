import homeworkImg from "../../assets/rasmus-images/jentegruppe-sotra-1-ratio-large.jpg";
import ActivityPage from "../ActivityPage";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Med base på Kraftsenter for aktivitet på Sotra, arrangerer vi
      jentegruppe for jenter som vil delta på aktiviteter sammen.
      Her er det fullt mulig å ta med venner eller komme alene.
      Det er to kvinnelige aktivitetsledere som jobber på denne 
      aktiviteten, og varm mat serveres som oftest.
      `,
  },
  {
    isStrong: false,
    content: `
      Aktiviteter på huset varierer fra gang til gang, fra tegning,
      maling, baking, kakesalg, filmvisning, quiz og mye mer!
      Minst annenhver gang drar vi på utflukt til steder som badeland, Gokart,
      klatreparken Høyt og Lavt, skøyter, kino, restaurantbesøk, tivoli, bowling,
      “Fangene på fortet” og mye mye mer!
      `,
  },
  {
    isStrong: false,
    content: `
      Vi ønsker å ha Øygardens beste jentegruppe, og tar gjerne forslag fra alle
      deltakere om hva vi kan gjøre til neste gang. <3
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "Annenhver lørdag kl. 12:00 - 16:00" },
  { title: "Aldersgruppe:", text: "13 - 20 år" },
  {
    title: "Påmelding:",
    text: "Kontakt Rasmus på 40 40 60 98 for info om påmelding og datoer for jentegruppen.",
  },
  { title: "Adresse:", text: "Grønamyrvegen 6, 5353 Sotra" },
];

const centerMarker = { lat: 60.3596836, lng: 5.1236062 };

const GirlGroupSotra = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Jentegruppe"
    location="Sotra"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
    longLatMarker={centerMarker}
  />
);

export default GirlGroupSotra;
