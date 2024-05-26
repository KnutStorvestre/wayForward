import ActivityCard from "../components/common/ActivityCard";
import "./styles/Activity.css";

const activityData = [
  {
    activityTitle: "Leksehjelp 1",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Mandag 16:30 - 17:30",
    ageGroup: "1 - 4 klasse",
    description:
      "Ønsker du hjep med lekser eller hjelpe andre med lekser? Da er dette tilbudet for deg. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp 2",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Mandag 17:30 - 19:00",
    ageGroup: "5 - 7 klasse",
    description:
      "Ønsker du hjep med lekser eller hjelpe andre med lekser? Da er dette tilbudet for deg. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Sykkelverksted",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 19:00",
    ageGroup: "1 - 7 klasse",
    description:
      "Kan fikse alle typer sykler. Det er bare å ta med sykkelen din og kom innom.",
  },
  {
    activityTitle: "Jentegruppe",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Nye aktiviteter hver uke. aktiviteter som gocart, sykling, klatring, og mye mer.",
  },
  {
    activityTitle: "Leksehjelp 2",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek. Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
];

const Landaas = () => {
  return (
    <div className="page-container">
      <TopText />
      <div className="center-content">
        <div className="activity-cards">
          {activityData.map((activity, index) => (
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

function TopText() {
  return (
    <div className="top-text">
      <h1 className="extra-bold-inter">Sotra aktiviteter</h1>
      <p className="semibold-inter">
        Disse aktivitetene er for barn og unge på Sotra. Ting endrer seg hele
        tiden. Husk å sjekk vår{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        og{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        for Sotra.
      </p>
    </div>
  );
}

export default Landaas;
