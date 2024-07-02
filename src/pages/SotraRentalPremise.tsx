import RentalPremise, { RentalPremiseProps } from "./RentalPremise";
import interior1 from "../assets/rentals/interior-1.jpg";
import interior2 from "../assets/rentals/interior-2.jpg";
import interior3 from "../assets/rentals/interior-3.jpg";

const sotraRentalPremiseData: RentalPremiseProps = {
  rentalPremiseName: "Femmeren",
  images: [
    { url: interior1, alt: "Interior One" },
    { url: interior2, alt: "Interior Two" },
    { url: interior3, alt: "Interior Three" },
  ],
  mapLink:
    "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
  address: "museplassen 3",
  zipCode: "5007 Bergen",
  apartmentDescription: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  `,
  keyInfo: [
    ["Størrelse: 200m²", "Antall rom: 5", "Antall toaletter: 2", "Etasje: 1"],
    [
      "Parkeringsplasser: 10",
      "Antall stoler: 10",
      "Antall benker: 12",
      "Antall bord: 4",
    ],
    ["Byggeår: 1970", "Tomteareal: 6764 m²"],
  ],
  facilities: [
    ["God tilgang for rullestol", "Nært bybane", "Uteområde", "Kjøkken"],
    ["God tilgang for rullestol", "Nært bybane", "Uteområde"],
  ],
  calendarLink: "https://www.google.com/calendar",
  contactInfo: {
    contactName: "Rasmus Solberg",
    phoneNumber: "+47 555 55 555",
    email: "post@wayforward.com",
  },
  priceDescription: "Dette er et 100% gratis tilbud av Bergen kommune",
  longLatMarker: {
    lat: 60.3873984,
    lng: 5.3220588,
  },
};

const SotraRentalPremise = () => {
  return <RentalPremise {...sotraRentalPremiseData} />;
};

export default SotraRentalPremise;
