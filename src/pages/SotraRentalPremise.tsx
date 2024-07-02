import RentalPremise, { RentalPremiseProps } from "./RentalPremise";
import interior1 from "../assets/rentals/interior-1.jpg";
import interior2 from "../assets/rentals/interior-2.jpg";
import interior3 from "../assets/rentals/interior-3.jpg";

const sotraRentalPremiseData: RentalPremiseProps = {
  images: [
    { url: interior1, alt: "Interior One" },
    { url: interior2, alt: "Interior Two" },
    { url: interior3, alt: "Interior Three" },
  ],
  rentalPremiseName: "Femmeren",
  location: "Sotra",
  address: "museplassen 3",
  zipCode: "5007 Bergen",
  textParagraphs: [
    {
      isStrong: true,
      content: `
      Leiligheten er lys og romslig med en gjennomgående god standard. Delikat
      IKEA-kjøkken med kjøkkenøy og åpen løsning mot stuen. Stor og
      møbleringsvennlig stue med peisovn og utgang til balkong med kveldssol.
      Pent, flislagt baderom med både badekar og dusjsone, som ble utvidet og
      rehabilitert i regi av sameiet i 2022. Tre gode soverom ligger
      barnevennlig i tilknytning til hverandre. Hovedsoverommet har utgang til
      sørvestvendt balkong med hyggelig`,
    },
    {
      isStrong: false,
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque
      accusamus autem nesciunt modi! Doloremque labore fuga quae a. Voluptatem
      ut architecto beatae obcaecati numquam! Quas laborum ab nulla cumque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque
      accusamus autem nesciunt modi! Doloremque labore fuga quae a. Voluptatem
      ut architecto beatae obcaecati numquam! Quas laborum ab nulla cumque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
      quam expedita adipisci. Rerum aut ipsa odio atque, ex ab, accusantium
      nobis molestias ad error consequuntur expedita exercitationem vel modi.
      `,
    },
  ],
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
