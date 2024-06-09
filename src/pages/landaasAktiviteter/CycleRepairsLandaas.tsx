import ActivityPage from "../ActivityPage";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      I sykkelgarasjen vis a vis aktivitetshuset «Femmeren» har EBF gitt Way
      Forward garasjelokaler som har blitt utviklet til et gjennomført
      sykkelverksted. Her kan barn og ungdom komme og få hjelp til å reparere
      egne sykler. Erfarne sykkelreparatører og aktivitetsledere vil være til
      stede slik at barn og unge selv kan være med på å reparere syklene.
      `,
  },
  {
    isStrong: false,
    content: `
      Ofte blir det tid til sykkelturer for deltakerne etter at syklene er
      reparert.
      `,
  },
  {
    isStrong: false,
    content: `
      Vi holder åpent i lokalene hver onsdag mellom kl. 16:00 - 18:00. I
      forbindelse med ferieavvikling og vinterstider vil sykkelverkstedet være
      åpent etter behov.
      `,
  },
];

const infoLines: InfoLines = [
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
    header="Sykkelverksted"
    location="Landås"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
  />
);

export default CyclerRepairs;
