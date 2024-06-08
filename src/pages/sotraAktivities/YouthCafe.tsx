import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { SectionHeader, InfoBox } from "../Util";

const YouthCafe = () => {
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
            <span className={styles.mainHeader}>Ungdomscafé,</span>
            <span className={styles.location}> Sotra</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongTextParagraph}>
              Velkommen til vår ungdomscafé på Kraftsenter for aktivitet. Her
              kan ungdom fra 13 og oppover komme for å henge ut, møte venner og
              delta på forskjellige aktiviteter på huset. Det blir servert varm
              mat hver gang.
            </p>
            <p className={styles.lightTextParagraph}>
              Vi har aktiviteter som Playstation (Fifa), tegning, bordtennis,
              foosball turnering, Kahoot, Bingo, Uno og mye mer. Om været er
              fint åpner vi opp for uteaktiviteter som fotballturneringer på
              Sotra arena eller liknende.
            </p>
            <p className={styles.lightTextParagraph}>
              Innimellom drar ungdomscaféen på utflukt til steder som Rush,
              Gokart Sartor, Megazone, Fangene på fortet, skøyter, badeland,
              bowling og mye mer.
            </p>
          </div>
          <InfoBox
            Lines={[
              { title: "Tidspunkt:", text: "XXXXX" },
              { title: "Aldersgruppe:", text: "13 - 20 år" },
              { title: "Pris:", text: "Gratis" },
              {
                title: "Påmelding:",
                text: `Det er bare å møte opp.`,
              },
              { title: "Adresse:", text: "XXXX" },
            ]}
          />
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <SectionHeader title="Kart" />
      </div>
    </div>
  );
};

export default YouthCafe;
