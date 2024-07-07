import femmerenHage from "../assets/real-images/femmeren-0-hage.png";
import femmeren1 from "../assets/real-images/femmeren-1.png";
import femmeren2H from "../assets/real-images/femmeren-2-h.png";
import RentalPremise from "./RentalPremise";
import { RentalPremiseProps } from "./RentalPremise";

const femmerenData: RentalPremiseProps = {
  images: [
    { url: femmeren2H, alt: "Femmeren lokale sett fra hagen" },
    { url: femmeren1, alt: "Femmeren lokale sett fra parkeringsplassen" },
    { url: femmerenHage, alt: "Hage område til Femmeren" },
  ],
  rentalPremiseName: "Femmeren",
  location: "Landås",
  address: "Joachim Lampes vei 5",
  zipCode: "5089 Bergen",
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
    "https://availability-way-forward.s3.amazonaws.com/femmeren-availability.json",
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

const Femmeren = () => {
  return <RentalPremise {...femmerenData} />;
};

export default Femmeren;
