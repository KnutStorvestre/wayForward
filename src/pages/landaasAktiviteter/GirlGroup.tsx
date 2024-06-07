import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const GirlGroup = () => {
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
            <span className={styles.mainHeader}>Jentegruppe,</span>
            <span className={styles.location}> Landås</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongTextParagraph}>
              Med base på Sletten arrangerer vi jentegruppe annenhver torsdag
              for jenter som vil møtes for å gjøre aktiviteter sammen. Her er
              det fullt mulig å ta med venner eller komme alene. Det er to
              kvinnelige aktivitetsledere som jobber på denne aktiviteten, og
              varm mat serveres som oftest.
            </p>
            <p className={styles.lightTextParagraph}>
              Aktiviteter på huset varierer fra gang til gang, fra tegning,
              maling, baking, kakesalg, filmvisning, quiz og mye mer! Minst
              annenhver gang drar vi på utflukt til steder som badeland, Gokart,
              klatreparken Høyt og Lavt, skøyter, kino, restaurantbesøk, tivoli,
              bowling, “Fangene på fortet” og mye mye mer!
            </p>
            <p className={styles.lightTextParagraph}>
              Vi ønsker å ha Slettens beste jentegruppe, og tar gjerne forslag
              fra alle deltakere om hva dere vil gjøre til neste gang. &lt;3
            </p>
            <InfoBox
              Lines={[
                { title: "Tid:", text: "Torsdager kl. 17:00-20:00" },
                { title: "Alder:", text: "13-20 år" },
                {
                  title: "Påmelding:",
                  text: "Kontakt Rasmus på 40 40 60 98 for info om påmelding og datoer for jentegruppen.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <InfoBoxHeader title="Kart" />
      </div>
    </div>
  );
};

interface Line {
  title: string;
  text: string;
}

interface InfoBoxProps {
  Lines: Line[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ Lines }) => {
  return (
    <div>
      <InfoBoxHeader title="Info" />
      <ul className={styles.infoBoxList}>
        {Lines.map((line, index) => (
          <li key={index}>
            <p>
              <span className={styles.strongText}>{line.title}</span>
              <span className={styles.lightText}> {line.text}</span>
            </p>
          </li>
        ))}
      </ul>
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

export default GirlGroup;
