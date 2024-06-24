import { Link } from "react-router-dom";
import skywoods from "../assets/images/sky-woods.jpg";
import styles from "./styles/Home.module.css";
import OldHouse from "../assets/images/old-house.jpg";
import OldGermanHouse from "../assets/images/old-german-house.jpg";
import ManOnMountain from "../assets/images/man-on-mountain.jpg";

interface CardProps {
  image: string;
  title: string;
  text: string;
  path: string;
  oldStyle?: boolean;
}

interface HrHeaderProps {
  title: string;
}

const Home: React.FC = () => {
  return (
    <div className={"page-container padding-top-7rem padding-bottom-90"}>
      <section className={styles.introSection}>
        <h1 className={styles.introTitle}>Welcome to Way Forward</h1>
        <p className={styles.introText}>
          Way Forward is a non-profit organization dedicated to integrating and
          including multicultural children and youth into Norwegian society,
          with a special focus on ensuring equal participation for girls.
          Founded by Richard Kiwanuka in 2004, we offer a variety of activities
          such as homework help, bike repair workshops, music studio sessions,
          and more. Join us in building a community where everyone can
          participate regardless of their background or financial situation.
        </p>
      </section>
      <div className={styles.imageContainer}>
        <img className={styles.mainImg} src={skywoods} alt="Sky Woods" />
      </div>
      <HrHeader title="Aktiviteter" />
      <div className={styles.homeCards}>
        <Card
          image={OldHouse}
          title="Landås"
          text="Se våre aktiviteter og sommeraktiviteter på Landås."
          path="/landaas-aktiviteter"
        />
        <Card
          image={OldHouse}
          title="Sotra"
          text="Se våre aktiviteter og sommeraktiviteter på Sotra."
          path="/sotra-aktiviteter"
        />
      </div>
      <HrHeader title="Utleie og utlån" />
      <div className={styles.homeCards}>
        <Card
          image={OldGermanHouse}
          title="Se våre lokaler"
          text="Hva kan du leie og hvem kan leie og hvorfor leier vi ut lokaler"
          path="/utleie"
        />
      </div>
      <HrHeader title="Om oss" />
      <div className={styles.homeCards}>
        <Card
          image={ManOnMountain}
          title="Hvem er vi"
          text="Hva gjør vi og hvorfor gjør vi det"
          path="/om-oss"
          oldStyle
        />
      </div>
      <HrHeader title="Partnere" />
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

const HrHeader: React.FC<HrHeaderProps> = ({ title }) => {
  return (
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
      <h1 className={styles.headerTitle}>{title}</h1>
      <hr className={styles.headerLine} />
    </div>
  );
};

export default Home;
