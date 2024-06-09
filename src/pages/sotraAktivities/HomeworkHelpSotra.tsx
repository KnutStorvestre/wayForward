import homeworkImg from "../../assets/images/homework-books.jpg";
import ActivityPage from "../ActivityPage";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Mandager fra kl. 16:00 - 19:00 vil barne- og ungdomsskoleelever få mulighet til å komme for å få hjelp med lekser i lokalene til Way Forward, hvor barn og ungdom fordeles etter alder og venner.
      Her jobber ansatte hos Way Forward og frivillige fra Norsk Folkehjelp.
      `,
  },
  {
    isStrong: false,
    content: `
      På leksehjelpen vil det bli servert varm mat før deltakerne begynner med leksene.
      Vi har alltid vegetarmat eller vegetaralternativer.
      Dette ser vi på som viktig både for sosialisering, inkludering og for å øke fokuset på leksene.
      Etter alle er ferdig med ukens lekser, arrangerer vi noen felles aktiviteter som bingo, Kahoot, quiz, kortspill eller annet frem til aktiviteten er ferdig.
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: "Mandag kl. 16 - 19" },
  { title: "Aldersgruppe:", text: "1 - 10 klasse" },
  { title: "Påmelding:", text: "Det er bare å møte opp." },
  { title: "Adresse:", text: "Grønamyrvegen 6, 5353 Straume" },
];

const HomeWorkHelpSotra = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Leksehjelp"
    location="Sotra"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
  />
);

export default HomeWorkHelpSotra;
