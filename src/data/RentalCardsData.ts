import italyVilla from "../assets/images/Italy-house.jpg";
import modernHouse from "../assets/images/modern-house.jpg";
import { RentalCardDataArray } from "../types";

const rentalCardsData: RentalCardDataArray = [
  {
    activityTitle: "Femmeren",
    image: {url: modernHouse, alt: "Modern house"},
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      `Ønsker du å bo i et moderne hus i Bergen? Da er dette tilbudet for deg.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error, iste vel commodi possimus rem accusantium numquam consectetur magni id hic ullam blanditiis adipisci labore debitis voluptatem ab porro officiis consequatur. Tempore ipsum incidunt blanditiis molestias et`,
    linkBuilding: "/utleie/femmeren",
  },
  {
    activityTitle: "Luksusvilla i Italia",
    image: {url: italyVilla, alt: "Italy villa"},
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      `Ønsker du å bo i en luksusvilla i Italia? Da er dette tilbudet for deg. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error, iste vel commodi possimus rem accusantium numquam consectetur magni id hic ullam blanditiis adipisci labore debitis voluptatem ab porro officiis consequatur. Tempore ipsum incidunt blanditiis molestias et`,
    linkBuilding: "/utleie/sotra-utleie",
  },
];

export default rentalCardsData;