import { ActivitiesPageData } from "../types";
import Bergen from "../assets/activities/landaas/bergen.png";
import FredagsklubbSletten from "../assets/rasmus-images/fredagsklubb-sletten-0-ratio-small.jpg"
import CyclerRepairsLandaas from "../assets/rasmus-images/sykkelverksted-1-ratio-small.jpg";
import HomeWorkHelp from "../assets/rasmus-images/leksehjelp-sletten-1-ratio-small.jpg";
import GirlGroup from "../assets/rasmus-images/jentegruppe-sotra-3-ratio-small.jpg";



const ActivitiesPageLandaas: ActivitiesPageData = {
    title: "Landås Aktiviteter",
    topText: "Disse aktivitetene er for barn og ungdom på Landås.",
    instagramLink: "https://www.instagram.com/",
    facebookLink: "https://www.facebook.com/",
    activities: [
    {
      activityTitle: "Sommeraktiviteter",
      link: "/landaas-aktiviteter/sommeraktiviteter",
      time: "Trykk her for mer info",
      ageGroup: "6 - 19 år",
      description:
        `
        Årlig arrangerer vi 10 dager i starten av hver sommerferie fylt med masse forskjellige
        aktiviteter! Klikk inn på aktiviteten for påmelding, datoer og mer info.
        `,
      image: Bergen,
    },
    {
      activityTitle: "Leksehjelp",
      link: "/landaas-aktiviteter/leksehjelp",
      time: "Tirsdag 16:00 - 19:00",
      ageGroup: "1 - 10 klasse",
      description:
        `
        Velkommen til gratis leksehjelp med servering av varm mat. Her blir det mulighet
        for å få hjelp med vanskelige lekser og møtes for å gjøre leksene sammen med venner.
        `,
      image: HomeWorkHelp,
    },
    {
      activityTitle: "Sykkelverksted",
      link: "/landaas-aktiviteter/sykkelverksted",
      time: "Tirsdag 15:00 - 19:00",
      ageGroup: "6 - 19 år",
      description:
        `
        Velkommen til vårt sykkelverksted på Sletten. Her hjelper vi barn og ungdom med
        reparasjoner av egne sykler. Det er også muligheter for sykkelturer om tiden strekker til.
        `,
      image: CyclerRepairsLandaas,
    },
    {
      activityTitle: "Jentegruppe",
      link: "/landaas-aktiviteter/jentegruppe",
      time: "Annh. torsdag 16:00-19:00",
      ageGroup: "13-20 år",
      description:
        `Velkommen til vår jentegruppe med gøye aktiviteter og utflukter annenhver torsdag.`,
      image: GirlGroup,
    },
    {
      activityTitle: "Fredagsklubb",
      link: "/landaas-aktiviteter/fredagsklubb",
      time: "fredag 16:00 - 19:00",
      ageGroup: "13 - 20 år",
      description:
        `
        Velkommen til vår fredagsklubb på Femmeren. Her kan barn og ungdom komme
        for å henge ut, møte venner og delta på forskjellige aktiviteter på Femmeren.
        `,
      image: FredagsklubbSletten,
    },
  ],
};

export default ActivitiesPageLandaas;