import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const HomeWorkHelpSotra = () => {
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
            <span className={styles.mainHeader}>Leksehjelp,</span>
            <span className={styles.location}> Sotra/Øygarden</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongText}>
              Mandager fra kl. 16:00 - 19:00 vil barne- og ungdomsskoleelever få
              mulighet til å komme for å få hjelp med lekser i lokalene til Way
              Forward, hvor barn og ungdom fordeles etter alder og venner. Her
              jobber ansatte hos Way Forward og frivillige fra Norsk Folkehjelp.
            </p>
            <p className={styles.lightText}>
              På leksehjelpen vil det bli servert varm mat før deltakerne
              begynner med leksene. Vi har alltid vegetarmat eller
              vegetaralternativer. Dette ser vi på som viktig både for
              sosialisering, inkludering og for å øke fokuset på leksene. Etter
              alle er ferdig med ukens lekser, arrangerer vi noen felles
              aktiviteter som bingo, Kahoot, quiz, kortspill eller annet frem
              til aktiviteten er ferdig.
            </p>
            <p className={styles.lightText}>
              Denne aktiviteten krever ikke påmelding. Det er bare til å møte
              opp ved Grønamyrvegen 6, 5353 Straume
            </p>
            <InfoBoxHeader title="Info" />
          </div>
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <InfoBoxHeader title="Kart" />
      </div>
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

export default HomeWorkHelpSotra;
