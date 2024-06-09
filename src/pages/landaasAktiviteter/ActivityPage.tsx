import styles from "../styles/ActivityPage.module.css";
import { SectionHeader, InfoBox } from "../Util";

interface InfoLine {
  title: string;
  text: string;
}

interface ActivityPageProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  location: string;
  description: React.ReactNode;
  infoBoxLines: InfoLine[];
}

const ActivityPage: React.FC<ActivityPageProps> = ({
  imgSrc,
  imgAlt,
  title,
  location,
  description,
  infoBoxLines,
}) => (
  <div className="page-container padding-top-7rem">
    <div className="max-width-container">
      <img src={imgSrc} alt={imgAlt} className={styles.largeImage} />
      <div className="text-container horizontal-padding">
        <p className={styles.topText}>
          <span className={styles.mainHeader}>{title},</span>
          <span className={styles.location}> {location}</span>
        </p>
        <div className={styles.bodyText}>{description}</div>
        <InfoBox Lines={infoBoxLines} />
      </div>
    </div>
    <div className={styles.wideContainerBottom}>
      <SectionHeader title="Kart" />
    </div>
  </div>
);

export default ActivityPage;
export type { InfoLine, ActivityPageProps };
