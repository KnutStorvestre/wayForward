import React from "react";
import ActivityCard from "../components/common/ActivityCard";
import styles from "./styles/ActivitiesPage.module.css"; // Import CSS module

interface ActivitiesPageProps {
  data: {
    title: string;
    topText: string;
    instagramLink: string;
    facebookLink: string;
    activities: {
      activityTitle: string;
      link: string;
      time: string;
      ageGroup: string;
      description: string;
      image: string;
    }[];
  };
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ data }) => {
  const { title, topText, instagramLink, facebookLink, activities } = data;
  return (
    <div className={styles.pageContainer}>
      <TopText
        title={title}
        topText={topText}
        instagramLink={instagramLink}
        facebookLink={facebookLink}
      />
      <div className={styles.centerContent}>
        <div className={styles.activityCards}>
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              link={activity.link}
              activityTitle={activity.activityTitle}
              time={activity.time}
              ageGroup={activity.ageGroup}
              description={activity.description}
              image={activity.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TopTextProps {
  title: string;
  topText: string;
  instagramLink: string;
  facebookLink: string;
}

const TopText: React.FC<TopTextProps> = ({
  title,
  topText,
  instagramLink,
  facebookLink,
}) => {
  return (
    <div className={styles.topText}>
      <h1 className={styles.extraBoldInter}>{title}</h1>
      <p className="semi-bold-inter">
        {topText} Se vår{" "}
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>{" "}
        og{" "}
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{" "}
        for mer informasjon.
      </p>
    </div>
  );
};

export default ActivitiesPage;
