import italyVilla from "../assets/images/italy-house.jpg";
import modernHouse from "../assets/images/modern-house.jpg";
import { RentalCardDataArray } from "../types";

const rentalCardsData: RentalCardDataArray = [
  {
    activityTitle: "Femmeren",
    location: "Landås",
    image: {url: modernHouse, alt: "Modern house"},
    description:
      `Ønsker dullam blanditiis adipis porro officiis consequatur.  
       `,
    linkBuilding: "/utleie/femmeren",
  },
  {
    activityTitle: "Villa i Italia",
    location: "Sotra",
    image: {url: italyVilla, alt: "Italy villa"},
    description:
      `Ønsker du å bo i en villa i Italia? Vi har en villa i Italia som du kan leie.`,
    linkBuilding: "/utleie/sotra-utleie",
  },
];

export default rentalCardsData;