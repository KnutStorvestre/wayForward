import React from "react";
import ActivityCard from "./ActivityCard";
import "./pages.css";

const activityData = [
  {
    activityTitle: "Leksehjelp",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
  {
    activityTitle: "Leksehjelp",
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    time: "Tirsdag 15:00 - 17:00",
    ageGroup: "1 - 4 klasse",
    description:
      "Dette er et åpent tilbud for alle bar i Årstad bydel. Husk å ta med klær for utelek.",
  },
];

export default function Landaas() {
  return (
    <div>
      <TopText />
      <div className="the-container">
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
}

function TopText() {
  return (
    <div>
      <h1 className="extra-bold-inter">Landås aktiviteter</h1>
      <p className="semibold-inter">
        Ting endrer seg hele tiden. Husk å sjekk{" "}
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
        </a>
        .
      </p>
    </div>
  );
}
