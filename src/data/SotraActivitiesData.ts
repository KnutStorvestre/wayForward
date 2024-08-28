import { ActivitiesPageData } from "../types";
import Bergen from "../assets/activities/sotra/bergen.png";
import GirlGroup from "../assets/rasmus-images/jentegruppe-sotra-3-ratio-small.jpg";
import HomeWorkHelp from "../assets/rasmus-images/leksehjelp-sletten-1-ratio-small.jpg";




const ActivitiesPageLandaas: ActivitiesPageData = {
    title: "Sotra Aktiviteter",
    topText: "Disse aktivitetene er for barn og unge på Sotra.",
    instagramLink: "https://www.instagram.com/",
    facebookLink: "https://www.facebook.com/",
    activities: [
    {
      activityTitle: "Leksehjelp",
      link: "/sotra-aktiviteter/leksehjelp",
      time: "Mandag 16:00 - 19:00",
      ageGroup: "1 - 10 klasse",
      description:
        `
        Velkommen til gratis leksehjelp med servering av varm mat. Her blir det mulighet
         for å få hjelp med vanskelige lekser og møtes for å gjøre leksene sammen med venner.
         `,
      image: HomeWorkHelp,
    },
    {
      activityTitle: "Jentegruppe",
      link: "/sotra-aktiviteter/jentegruppe",
      time: "Annh. lørdag 12:00-16:00",
      ageGroup: "13-20 år",
      description:
        `Velkommen til vår jentegruppe med gøye aktiviteter og utflukter annenhver torsdag. Tider kan variere.`,
      image: GirlGroup,
    },
    {
      activityTitle: "Ungdomscafè",
      link: "/sotra-aktiviteter/ungdomskafe",
      time: "XX XX:XX - XX:XX",
      ageGroup: "13 - 20 år",
      description:
        `
        Velkommen til vår ungdomscafé på Kraftsenter for aktivitet på Sotra. Her kan ungdom
          komme for å henge ut, møte venner og delta på forskjellige aktiviteter.
          `,
      image: Bergen,
    },
  ],
};

export default ActivitiesPageLandaas;