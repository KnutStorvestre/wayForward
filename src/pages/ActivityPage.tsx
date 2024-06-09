import styles from "./styles/ActivityPage.module.css";
import { SectionHeader, InfoBox } from "./Util";

type InfoLine = {
  title: string;
  text: string;
};

type InfoLines = InfoLine[];

type TextParagraph = {
  content: string;
  isStrong: boolean;
};

type TextParagraphs = TextParagraph[];

interface ActivityPageProps {
  imgSrc: string;
  imgAlt: string;
  header: string;
  location: string;
  textParagraphs: TextParagraphs;
  infoLines: InfoLines;
}

const ActivityPage: React.FC<ActivityPageProps> = ({
  imgSrc,
  imgAlt,
  header,
  location,
  textParagraphs,
  infoLines,
}) => {
  return (
    <div className="page-container padding-top-7rem">
      <div className="max-width-container">
        <img src={imgSrc} alt={imgAlt} className={styles.largeImage} />
        <div className="text-container horizontal-padding">
          <p className={styles.topText}>
            <span className={styles.mainHeader}>{header},</span>
            <span className={styles.location}> {location}</span>
          </p>
          <div className={styles.bodyText}>
            {textParagraphs.map((text, index) => (
              <p
                key={index}
                className={
                  text.isStrong
                    ? styles.strongTextParagraph
                    : styles.lightTextParagraph
                }
              >
                {text.content}
              </p>
            ))}
          </div>
          <InfoBox Lines={infoLines} />
        </div>
      </div>
      <div className={styles.wideContainerBottom}>
        <SectionHeader title="Kart" />
      </div>
    </div>
  );
};

export type { InfoLines, TextParagraphs };
export default ActivityPage;
