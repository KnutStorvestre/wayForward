import italyVilla from "../../assets/Italy-house.jpg";
import modernHouse from "../../assets/modern-house.jpg";
import { RentalCardsData } from "../types";

const rentalCardsData: RentalCardsData = [
  {
    activityTitle: "Moderne hus i Bergen",
    image: modernHouse,
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      "Ønsker du å bo i et moderne hus i Bergen? Da er dette tilbudet for deg.",
    contactInfo: {
      contactName: "Rasmus Solberg",
      phoneNumber: "+47 555 55 555",
      email: "post@wayforward.com",
    },
    linkBuilding: "/utleie/Femmeren",
  },
  {
    activityTitle: "Luksusvilla i Italia",
    image: italyVilla,
    googleMapsLink:
      "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
    street: "museplassen 3",
    zipCode: "5007 Bergen",
    description:
      "Ønsker du å bo i en luksusvilla i Italia? Da er dette tilbudet for deg.",
    contactInfo: {
      contactName: "Rasmus Solberg",
      phoneNumber: "+47 555 55 555",
      email: "post@wayforward.com",
    },
    linkBuilding: "/utleie/SotraRentalPremise",
  },
];

export default rentalCardsData;