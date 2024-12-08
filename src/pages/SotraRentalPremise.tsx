import RentalPremise, { RentalPremiseProps } from "./RentalPremise";
import entrance from "../assets/rental-premises/sotra/entrance-0-full.jpg";
import hallway from "../assets/rental-premises/sotra/hallway.jpg";
import diningHall from "../assets/rental-premises/sotra/dining-hall.jpg";
import kitchen0 from "../assets/rental-premises/sotra/kitchen-0.jpg";
import kitchen1 from "../assets/rental-premises/sotra/kitchen-1.jpg";
import kitchen2 from "../assets/rental-premises/sotra/kitchen-2.jpg";
import foosball from "../assets/rental-premises/sotra/foosball-0.jpg";
import speakerRoom from "../assets/rental-premises/sotra/speaker-room-0.jpg";
import toilet from "../assets/rental-premises/sotra/toilet-3.jpg";

const sotraRentalPremiseData: RentalPremiseProps = {
  images: [
    { url: entrance, alt: "Inngang" },
    { url: hallway, alt: "Gang" },
    { url: diningHall, alt: "Spiserom" },
    { url: kitchen0, alt: "Kjøkken" },
    { url: kitchen1, alt: "Kjøkken" },
    { url: kitchen2, alt: "Kjøkken" },
    { url: foosball, alt: "Foosball bord" },
    { url: speakerRoom, alt: "Stort rom med høytalere" },
    { url: toilet, alt: "Toalett" },
  ],
  rentalPremiseName: "Øygarden kraftsenter for aktivitet",
  location: "Sotra",
  address: "Grønamyrvegen 6",
  zipCode: "5353 Straume",
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
  s3BucketLink:
    "https://availability-way-forward.s3.amazonaws.com/sotra-availability.json",
  contactInfo: {
    contactName: "Rasmus Solberg",
    phoneNumber: "+47 555 55 555",
    email: "post@wayforward.com",
  },
  priceDescription: "Dette er et 100% gratis tilbud av Bergen kommune",
  longLatMarker: {
    lat: 60.359691621698374,
    lng: 5.126184352370146,
  },
};

const SotraRentalPremise = () => {
  return <RentalPremise {...sotraRentalPremiseData} />;
};

export default SotraRentalPremise;
