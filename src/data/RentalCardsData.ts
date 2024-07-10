import femmerenV from "../assets/rental-premises/femmeren/femmeren-2-v-short.png";
import italyVilla from "../assets/rental-premises/sotra/italy-house.jpg";
import { RentalCardDataArray } from "../types";

const rentalCardsData: RentalCardDataArray = [
  {
    activityTitle: "Femmeren",
    location: "Landås",
    image: {url: femmerenV, alt: "Femmeren lokale på Landås"},
    description:
      `
      Trykk her for å se vårt leietilbud på Landås.  
       `,
    linkBuilding: "/utleie/femmeren",
  },
  {
    activityTitle: "Sotra lokale",
    location: "Sotra",
    image: {url: italyVilla, alt: "Italy villa"},
    description:
      `
      Trykk her for å se vårt leietilbud på Sotra.
      `,
    linkBuilding: "/utleie/sotra-utleie",
  },
];

export default rentalCardsData;