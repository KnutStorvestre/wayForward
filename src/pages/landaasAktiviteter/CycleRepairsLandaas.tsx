import ActivityPage, { InfoLine } from "./ActivityPage";
import styles from "../styles/ActivityPage.module.css";
import homeworkImg from "../../assets/images/homework-books.jpg";

const cyclerRepairsDescription = (
  <>
    <p className={styles.strongTextParagraph}>
      I sykkelgarasjen vis a vis aktivitetshuset «Femmeren» har EBF gitt Way
      Forward garasjelokaler som har blitt utviklet til et gjennomført
      sykkelverksted. Her kan barn og ungdom komme og få hjelp til å reparere
      egne sykler. Erfarne sykkelreparatører og aktivitetsledere vil være til
      stede slik at barn og unge selv kan være med på å reparere syklene.
    </p>
    <p className={styles.lightTextParagraph}>
      Ofte blir det tid til sykkelturer for deltakerne etter at syklene er
      reparert.
    </p>
    <p className={styles.lightTextParagraph}>
      Vi holder åpent i lokalene hver onsdag mellom kl. 16:00 - 18:00. I
      forbindelse med ferieavvikling og vinterstider vil sykkelverkstedet være
      åpent etter behov.
    </p>
  </>
);

const cyclerRepairsInfoBoxLines: InfoLine[] = [
  { title: "Tidspunkt:", text: "Onsdag kl. 16:00 - 18:00" },
  { title: "Alder:", text: "6 - 19 år" },
  { title: "Pris:", text: "Gratis" },
  {
    title: "Kontakt:",
    text: "Sykkelreparatør Rasmus Solberg via sms på 40 40 60 98 for spørsmål.",
  },
  { title: "Adresse:", text: "XXXX" },
];

const CyclerRepairs: React.FC = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    title="Sykkelverksted"
    location="Landås"
    description={cyclerRepairsDescription}
    infoBoxLines={cyclerRepairsInfoBoxLines}
  />
);

export default CyclerRepairs;
