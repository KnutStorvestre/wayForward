import styles from "../styles/ActivityPage.module.css";
import { InfoBox, SectionHeader } from "../Util";
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
            <p className={styles.strongTextParagraph}>
              I sykkelgarasjen vis a vis aktivitetshuset «Femmeren» har EBF gitt
              Way Forward garasjelokaler som har blitt utviklet til et
              gjennomført sykkelverksted. Her kan barn og ungdom komme og få
              hjelp til å reparere egne sykler. Erfarne sykkelreparatører og
              aktivitetsledere vil være til stede slik at barn og unge selv kan
              være med på å reparere syklene.
            </p>
            <p className={styles.lightTextParagraph}>
              Ofte blir det tid til sykkelturer for deltakerne etter at syklene
              er reparert.
            </p>
            <p className={styles.lightTextParagraph}>
              Vi holder åpent i lokalene hver onsdag mellom kl. 16:00 - 18:00. I
              forbindelse med ferieavvikling og vinterstider vil
              sykkelverkstedet være åpent etter behov.
            </p>
            <p className={styles.lightTextParagraph}>
              Alle reparasjoner og deler er helt gratis, og påmelding er ikke
              nødvendig på denne aktiviteten.
            </p>
          </div>
          <InfoBox
            Lines={[
              { title: "Tidspunkt:", text: "Tirsdag kl. 15:00-19:00" },
              { title: "Alder:", text: "6 - 19 år" },
              {
                title: "Kontakt:",
                text: " Sykkelreparatør Rasmus Solberg via sms på 40 40 60 98 for spørsmål.",
              },
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

export default CyclerRepairs;
