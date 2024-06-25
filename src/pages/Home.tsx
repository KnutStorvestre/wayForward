import { Link } from "react-router-dom";
import skywoods from "../assets/images/sky-woods.jpg";
import styles from "./styles/Home.module.css";
import OldHouse from "../assets/images/old-house.jpg";
import OldGermanHouse from "../assets/images/old-german-house.jpg";
import RentalCardH from "../components/common/RentalCardH";
import rentalCardsData from "../data/RentalCardsData";

const ActivityImage2 =
  "https://via.placeholder.com/600x400.png?text=Activity+Image+2";
const RentalImage1 =
  "https://via.placeholder.com/600x400.png?text=Rental+Image+1";
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
            <h2 className={styles.sectionHeader}>More About Our Activities</h2>
            <p className={styles.sectionText}>
              Our activities are designed to engage children and youth in fun
              and educational ways. From sports and outdoor adventures to
              creative arts and technology, we provide a safe and supportive
              environment for everyone. Join us to discover new passions, make
              friends, and learn new skills. Vi har også sykkelverksted.
            </p>
          </div>
        </div>
      </div>
      <HrHeader />
      <div className="text-container">
        <div className={styles.homeSectionTextFirst}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionHeader}>
              Rental and Loan Information
            </h2>
            <p className={styles.sectionText}>
              We offer a variety of spaces and equipment for rent to support
              community events and activities. Our facilities are
              well-maintained and equipped to meet your needs, whether you're
              hosting a workshop, meeting, or celebration. Contact us to learn
              more about our rental options and availability.
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
            <h2 className={styles.sectionHeader}>About Us</h2>
            <p className={styles.sectionText}>
              Way Forward was established with a vision to create an inclusive
              community where every child and youth can thrive. Our team is
              passionate about making a difference and providing opportunities
              for growth and development. Learn more about our mission, values,
              and the people behind our organization.
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
