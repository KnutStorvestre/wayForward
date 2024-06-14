import MapComponent from "../components/common/MapComponent";
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

type centerMarker = {
  lat: number;
  lng: number;
};

interface ActivityPageProps {
  imgSrc: string;
  imgAlt: string;
  header: string;
  location: string;
  textParagraphs: TextParagraphs;
  infoLines: InfoLines;
  renderMapBool: boolean;
  centerMarker: centerMarker;
}

const ActivityPage: React.FC<ActivityPageProps> = ({
  imgSrc,
  imgAlt,
  header,
  location,
  textParagraphs,
  infoLines,
  renderMapBool,
  centerMarker,
}) => {
  return (
    <div
      className={`page-container padding-top-7rem ${
        renderMapBool ? styles.pageContainerNoPadding : styles.pageContainer
      }`}
    >
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
      {renderMapBool && (
        <div>
          <SectionHeader title="Kart" />
          <MapComponent center={centerMarker} />
        </div>
      )}
    </div>
  );
};

export type { InfoLines, TextParagraphs };
export default ActivityPage;
