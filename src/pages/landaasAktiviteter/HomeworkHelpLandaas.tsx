import ActivityPage from "../ActivityPage";
import homeworkImg from "../../assets/images/homework-books.jpg";
import { InfoLines, TextParagraphs } from "../ActivityPage";

const textParagraphs: TextParagraphs = [
  {
    isStrong: true,
    content: `
      Tirsdager fra kl. 16:00 - 19:00 vil barne- og ungdomsskoleelever få
      mulighet til å komme for å få hjelp med lekser i lokalene til Way Forward,
      hvor barn og ungdom fordeles etter alder og venner. Her jobber ansatte hos
      Way Forward og frivillige fra Norsk Folkehjelp.
      `,
  },
  {
    isStrong: false,
    content: `
      På leksehjelpen vil det bli servert varm mat før deltakerne begynner med
      leksene. Vi har alltid vegetarmat eller vegetaralternativer. Dette ser vi
      på som viktig både for sosialisering, inkludering og for å øke fokuset på
      leksene. Etter alle er ferdig med ukens lekser, arrangerer vi noen felles
      aktiviteter som bingo, Kahoot, quiz, kanonball eller annet frem til
      aktiviteten er ferdig.
      `,
  },
  {
    isStrong: false,
    content: `
      Leksehjelpen vår har stor pågang og bare kapasitet til 30 barn. Man må
      derfor regne med å få plass ca. annenhver uke. Man får
      `,
  },
];

const infoLines: InfoLines = [
  { title: "Tidspunkt:", text: " Tirsdager kl. 16:00 - 19:00" },
  { title: "Aldersgruppe:", text: " 1 - 10 klasse" },
  { title: "Påmelding:", text: `Send "LEKSEHJELP" på SMS til 40 40 60 98.` },
  { title: "Adresse:", text: "XXXX" },
];

const HomeWorkHelp = () => (
  <ActivityPage
    imgSrc={homeworkImg}
    imgAlt="Large top image"
    header="Leksehjelp"
    location="Landås"
    textParagraphs={textParagraphs}
    infoLines={infoLines}
  />
);

export default HomeWorkHelp;
