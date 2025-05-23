import styles from "./styles/Home.module.css";
import SotraEntrance from "../assets/home-page/entrance-0-full.jpg";
import FemmerenH from "../assets/home-page/femmeren-2-h.png";
import HomeCard from "../components/common/HomeCard";
import RentalCardH from "../components/common/RentalCardHome";
import rentalCardsData from "../data/RentalCardsData";
import wayForwardLogo from "../assets/home-page/way-forward-logo.svg";
import Handshake from "../assets/home-page/partners-handshake.jpeg";
import AboutUsImage from "../assets/home-page/people-keith-haring.jpg";

const Home: React.FC = () => {
  return (
    <div className={"page-container padding-top-7rem padding-bottom-90"}>
      <div className={styles.hero}>
        <div className={styles.backgroundImageContainer}>
          <section className={styles.heroText}>
            <div className={styles.heroCard}>
              <h1 className={styles.heroTitle}>Way Forward</h1>
              <p className={styles.heroParagraph}>
                <span>
                  Way Forward er en frivillig organisasjon dedikert til å
                  integrere og inkludere flerkulturelle barn og unge i det
                  norske samfunnet
                </span>
                <span className={styles.heroParagraphSecond}>
                  , med et spesielt fokus på å sikre lik deltakelse for jenter i
                  fritidsaktiviteter og idrett. Grunnlagt i 2004, tilbyr vi en
                  rekke aktiviteter som leksehjelp, sykkelverksted, fredagsklubb
                  og mer. Bli med oss å bygge et samfunn der alle kan delta
                  uansett bakgrunn eller økonomisk situasjon.
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="text-container">
        <img
          src={wayForwardLogo}
          alt="Way Forward Logo"
          className={styles.logo}
        />
      </div>
      <HrHeader />
      <div className="text-container">
        <div className={styles.homeSectionTextLast}>
          <div className={styles.homeCards}>
            <HomeCard
              image={FemmerenH}
              title="Landås"
              text="Se våre aktiviteter og sommeraktiviteter på Landås."
              path="/landaas-aktiviteter"
            />
            <HomeCard
              image={SotraEntrance}
              title="Sotra"
              text="Se våre aktiviteter og sommeraktiviteter på Sotra."
              path="/sotra-aktiviteter"
            />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.sectionHeader}>
              Aktiviteter og fritidstilbud
            </h2>
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
            <HomeCard
              image={AboutUsImage}
              title="Hvem er vi"
              text="Hva gjør vi og hvorfor gjør vi det"
              path="/om-oss"
            />
            <HomeCard
              image={Handshake}
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

const HrHeader = () => {
  return (
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
    </div>
  );
};

export default Home;
