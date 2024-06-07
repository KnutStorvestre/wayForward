import styles from "./styles/ActivityPage.module.css";

interface Line {
  title: string;
  text: string;
}

interface InfoBoxProps {
  Lines: Line[];
}

export const InfoBox: React.FC<InfoBoxProps> = ({ Lines }) => {
  return (
    <div>
      <SectionHeader title="Info" />
      <div className={styles.bodyText}>
        <ul className={styles.infoBoxList}>
          {Lines.map((line, index) => (
            <li key={index}>
              <p>
                <span className={styles.strongText}>{line.title}</span>
                <span className={styles.lightText}> {line.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div>
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
      <h1 className={styles.headerTitle}>{title}</h1>
      <hr className={styles.headerLine} />
    </div>
  </div>
);
