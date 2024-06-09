import ActivityPage, { InfoLine } from "./ActivityPage";
import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const girlGroupDescription = (
  <>
    <p className={styles.strongTextParagraph}>
      Med base på Sletten arrangerer vi jentegruppe annenhver torsdag for jenter
      som vil delta på aktiviteter sammen. Her er det fullt mulig å ta med
      venner eller komme alene. Det er to kvinnelige aktivitetsledere som jobber
      på denne aktiviteten, og varm mat serveres som oftest.
    </p>
    <p className={styles.lightTextParagraph}>
      Aktiviteter på huset varierer fra gang til gang, fra tegning, maling,
      baking, kakesalg, filmvisning, quiz og mye mer! Minst annenhver gang drar
      vi på utflukt til steder som badeland, Gokart, klatreparken Høyt og Lavt,
      skøyter, kino, restaurantbesøk, tivoli, bowling, “Fangene på fortet” og
      mye mye mer!
    </p>
    <p className={styles.lightTextParagraph}>
      Vi ønsker å ha Slettens beste jentegruppe, og tar gjerne forslag fra alle
      deltakere om hva vi kan gjøre til neste gang. &lt;3
    </p>
  </>
);

const girlGroupInfoBoxLines: InfoLine[] = [
  { title: "Tidspunkt:", text: "Annenhver torsdag kl. 16:00 - 19:00" },
  { title: "Alder:", text: "13-20 år" },
  {
    title: "Påmelding:",
    text: "Kontakt Rasmus på 40 40 60 98 for info om påmelding og datoer for jentegruppen.",
  },
  { title: "Adresse:", text: "XXXX" },
];

const GirlGroup: React.FC = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    title="Jentegruppe"
    location="Landås"
    description={girlGroupDescription}
    infoBoxLines={girlGroupInfoBoxLines}
  />
);

export default GirlGroup;
