import ActivityCard from "../components/common/ActivityCard";
import "./styles/Activity.css";

interface ActivitiesPageProps {
  data: {
    title: string;
    topText: string;
    instagramLink: string;
    facebookLink: string;
    activities: {
      activityTitle: string;
      googleMapsLink: string;
      street: string;
      zipCode: string;
      time: string;
      ageGroup: string;
      description: string;
    }[];
  };
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ data }) => {
  const { title, topText, instagramLink, facebookLink, activities } = data;
  return (
    <div className="page-container padding-top-4rem">
      <TopText
        title={title}
        topText={topText}
        instagramLink={instagramLink}
        facebookLink={facebookLink}
      />
      <div className="center-content">
        <div className="activity-cards">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              activityTitle={activity.activityTitle}
              googleMapsLink={activity.googleMapsLink}
              street={activity.street}
              zipCode={activity.zipCode}
              time={activity.time}
              ageGroup={activity.ageGroup}
              description={activity.description}
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
    <div className="top-text">
      <h1 className="extra-bold-inter">{title}</h1>
      <p className="semi-bold-inter">
        {topText}{" "}
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
