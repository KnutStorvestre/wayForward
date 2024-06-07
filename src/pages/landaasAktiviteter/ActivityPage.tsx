import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const CyclerRepairs = () => {
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
            <span className={styles.mainHeader}>Sykkelverksted,</span>
            <span className={styles.location}> Landås</span>
          </p>
          <div className={styles.bodyText}>
            <p className={styles.strongText}>
              I sykkelgarasjen vis a vis aktivitetshuset «Femmeren» har EBF gitt
              Way Forward garasjelokaler som har blitt utviklet til et
              gjennomført sykkelverksted. Her kan barn og ungdom komme og få
              hjelp til å reparere egne sykler. Erfarne sykkelreparatører og
              aktivitetsledere vil være til stede slik at barn og unge selv kan
              være med på å reparere syklene.
            </p>
            <p className={styles.lightText}>
              Ofte blir det tid til sykkelturer for deltakerne etter at syklene
              er reparert.
            </p>
            <p className={styles.lightText}>
              Vi holder åpent i lokalene hver onsdag mellom kl. 16:00 - 18:00. I
              forbindelse med ferieavvikling og vinterstider vil
              sykkelverkstedet være åpent etter behov.
            </p>
            <p className={styles.lightText}>
              Alle reparasjoner og deler er helt gratis, og påmelding er ikke
              nødvendig på denne aktiviteten.
            </p>
            <p className={styles.lightText}>
              Kontakt sykkelreparatør Rasmus Solberg via sms på 40 40 60 98 for
              spørsmål.
            </p>
            <InfoBoxHeader title="Info" />
          </div>
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        Aldersgruppe eks: 1.-4. klasse og møte tidspunkt
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

export default CyclerRepairs;
