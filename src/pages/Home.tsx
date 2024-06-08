import skywoods from "../assets/images/sky-woods.jpg";
import styles from "./styles/Home.module.css";
import { Link } from "react-router-dom";
import OldHouse from "../assets/images/old-house.jpg";
import OldGermanHouse from "../assets/images/old-german-house.jpg";
import ManOnMountain from "../assets/images/man-on-mountain.jpg";

const Home = () => {
  return (
    <div className={"page-container padding-top-7rem"}>
      <div className={styles.imageContainer}>
        <img className={styles.mainImg} src={skywoods} alt="Sky Woods" />
      </div>
      <HrHeader title="Aktiviteter" />
      <div className={styles.homeCards}>
        <Card
          image={OldHouse}
          title="Landås"
          text="Se vårt aktivitetstilbud på Landås."
          path="/landaas-aktiviteter"
        />
        <Card
          image={OldHouse}
          title="Sotra"
          text="Se vårt aktivitetstilbud på Sotra."
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
        />
      </div>
      <HrHeader title="Partnere" />
      <p>Kan trykke på sponsorer</p>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  text: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ image, title, text, path }) => {
  return (
    <Link className={styles.noUnderline} to={path}>
      <div className={styles.homeCard}>
        <img src={image} alt={title} className={styles.homeCardImage} />
        <div className={styles.homeCardContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

interface HrHeaderProps {
  title: string;
}

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
