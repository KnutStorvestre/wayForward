import { Link } from "react-router-dom";
import skywoods from "../assets/images/sky-woods.jpg";
import styles from "./styles/Home.module.css";
import OldHouse from "../assets/images/old-house.jpg";
import RentalCardH from "../components/common/RentalCardH";
import rentalCardsData from "../data/RentalCardsData";

const ActivityImage2 =
  "https://via.placeholder.com/600x400.png?text=Activity+Image+2";
const AboutUsImage =
  "https://via.placeholder.com/600x400.png?text=About+Us+Image";

interface CardProps {
  image: string;
  title: string;
  text: string;
  path: string;
  oldStyle?: boolean;
}

const Home: React.FC = () => {
  return (
    <div className={"page-container padding-top-7rem padding-bottom-90"}>
      <div className={styles.imageContainer}>
        <img className={styles.mainImg} src={skywoods} alt="Sky Woods" />
      </div>
      <section className={styles.introSection + " padding-top-4rem"}>
        <h1 className={styles.introTitle}>Velkommen til Way Forward</h1>
        <p className={styles.introText}>
          Way Forward er en frivillig organisasjon dedikert til å integrere og
          inkludere flerkulturelle barn og unge i det norske samfunnet, med et
          spesielt fokus på å sikre lik deltakelse for jenter. Grunnlagt av
          Richard Kiwanuka i 2004, tilbyr vi en rekke aktiviteter som
          leksehjelp, sykkelverksted, musikkstudiosesjoner og mer. Bli med oss i
          å bygge et samfunn der alle kan delta uansett bakgrunn eller økonomisk
          situasjon.
        </p>
      </section>
      <HrHeader />
      <div className="text-container">
        <div className={styles.homeSectionTextLast}>
          <div className={styles.homeCards}>
            <Card
              image={OldHouse}
              title="Landås"
              text="Se våre aktiviteter og sommeraktiviteter på Landås."
              path="/landaas-aktiviteter"
            />
            <Card
              image={ActivityImage2}
              title="Sotra"
              text="Se våre aktiviteter og sommeraktiviteter på Sotra."
              path="/sotra-aktiviteter"
            />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.sectionHeader}>Mer om våre aktiviteter</h2>
            <p className={styles.sectionText}>
              Våre aktiviteter er designet for å engasjere barn og unge på
              morsomme og lærerike måter. Fra sport og utendørseventyr til
              kreative kunstner og teknologi, vi tilbyr et trygt og støttende
              miljø for alle. Bli med oss for å oppdage nye lidenskaper, få
              venner og lære nye ferdigheter. Vi har også sykkelverksted.
            </p>
          </div>
        </div>
      </div>
      <HrHeader />
      <div className="text-container">
        <div className={styles.rentalSection}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionHeader}>
              Informasjon om utleie og lån
            </h2>
            <p className={styles.sectionText}>
              Vi tilbyr en rekke lokaler og utstyr for utleie for å støtte
              samfunnsarrangementer og aktiviteter. Våre fasiliteter er
              velholdte og utstyrt for å møte dine behov, enten du arrangerer en
              workshop, et møte eller en feiring. Kontakt oss for å lære mer om
              våre utleiemuligheter og tilgjengelighet.
            </p>
          </div>
          <div className={styles.homeCards}>
            <div className={styles.rentalCards}>
              {rentalCardsData.map((activity, index) => (
                <RentalCardH
                  key={index}
                  title={activity.activityTitle}
                  location={activity.location}
                  image={activity.image}
                  description={activity.description}
                  linkBuilding={activity.linkBuilding}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <HrHeader />
      <div className="text-container">
        <div className={styles.homeSectionTextLast}>
          <div className={styles.homeCards}>
            <Card
              image={AboutUsImage}
              title="Hvem er vi"
              text="Hva gjør vi og hvorfor gjør vi det"
              path="/om-oss"
            />
            <Card
              image={AboutUsImage}
              title="Partnere"
              text="Tusen takk!"
              path="/partnere"
            />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.sectionHeader}>Om oss</h2>
            <p className={styles.sectionText}>
              Way Forward ble etablert med en visjon om å skape et inkluderende
              samfunn hvor hvert barn og ungdom kan trives. Vårt team er
              lidenskapelig opptatt av å gjøre en forskjell og gi muligheter for
              vekst og utvikling. Lær mer om vårt oppdrag, våre verdier og
              menneskene bak vår organisasjon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  text,
  path,
  oldStyle = false,
}) => {
  return (
    <Link className={styles.noUnderline} to={path}>
      <div
        className={`${styles.homeCard} ${oldStyle ? styles.oldHomeCard : ""}`}
      >
        <img src={image} alt={title} className={styles.homeCardImage} />
        <div className={styles.homeCardContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

const HrHeader = () => {
  return (
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
    </div>
  );
};

export default Home;
