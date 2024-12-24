import femmerenHage from "../assets/rental-premises/femmeren/femmeren-0-hage.png";
import femmeren1 from "../assets/rental-premises/femmeren/femmeren-1.png";
import femmeren2H from "../assets/rental-premises/femmeren/femmeren-2-h.png";
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
      Velkommen til Femmeren, lokalet er ideelt for små og mellomstore sammenkomster med en kapasitet
      på opptil 35 personer. Femmeren er spesielt tilrettelagt for barnerelaterte
      arrangementer og aktiviteter, og er et lyst, funksjonelt og inkluderende sted
      som passer perfekt for barnebursdager, familiefester og andre arrangementer
      med barn i fokus.
      `,
    },
    {
      isStrong: false,
      content: `
      Femmeren egner seg ypperlig for feiringer og aktiviteter som setter barna i
      sentrum. Den romslige spisesalen har nok bord, stoler og barnestoler til å
      dekke behovene for opptil 35 gjester, og kjøkkenet er fullt utstyrt med alt
      fra komfyr til bestikk og kjøkkenredskaper. Uteområdet med en liten lekeplass
      og en overbygd terrasse gir barna mulighet til å leke og utforske i trygge
      omgivelser, noe som gjør det til et perfekt valg for barnebursdager eller
      familiearrangementer.
      `,
    },
    {
      isStrong: false,
      content: `
      Lokalet er lett tilgjengelig for alle, inkludert rullestolbrukere, med rampe
      og et handicaptoalett. Femmeren har totalt fem rom, inkludert en romslig gang,
      et funksjonelt kjøkken, en lys spisesal og to toaletter. Det er også seks
      gratis parkeringsplasser rett utenfor døren, noe som gjør det enkelt for 
      gjestene å komme seg til og fra arrangementet. Store vinduer sørger for at
      lokalet alltid er lyst og innbydende, og skaper en hyggelig atmosfære for
      barnevennlige aktiviteter.
      `,
    },
    {
      isStrong: false,
      content: `
      For å leie Femmeren må arrangementet være barnerelatert. Dette gjør lokalet spesielt
      egnet for bursdagsfeiringer, barnegrupper, familiefester og lignende sammenkomster
      der barn og familier står i sentrum. Med gode transportforbindelser og et trygt
      uteområde, er Femmeren tilrettelagt for å gjøre opplevelsen både enkel og hyggelig
      for små og store gjester.
      `,
    },
  ],
  keyInfo: [
    [
      "Kapasitet: 35 personer",
      "Antall rom: 5",
      "Parkeringsplasser: 6",
      "Etasje: 1",
    ],
    [
      "Inneområde: 128 m²",
      "Antall stoler: 35+",
      "Antall barnestoler: 10+",
      "Antall bord: 8",
    ],
    ["Handicap toalett: 1", "Standard toalett: 1"],
  ],
  facilities: [
    [
      "Rullestoltilgang",
      "God tilgang til kollektivtransport",
      "Uteområde",
      "Stort kjøkken",
    ],
    ["Spisesal", "Toaletter", "Gang", "Lekeplass"],
    [
      "Overbygd terrasse",
      "Gratis parkering",
      "Handicaptoalett",
      "Store vinduer",
    ],
    ["Lyst lokale", "Barnevennlig"],
  ],
  s3BucketLink:
    "https://availability-way-forward.s3.amazonaws.com/femmeren-availability.json",
  contactInfo: {
    contactName: "Rasmus Solberg",
    phoneNumber: "+47 404 06 098",
    email: "rasmus@wayforward.no",
  },
  priceDescription: "Dette er et 100% gratis tilbud av Bergen kommune",
  longLatMarker: {
    lat: 60.36165554826739,
    lng: 5.363863074396288,
  },
};

const Femmeren = () => {
  return <RentalPremise {...femmerenData} />;
};

export default Femmeren;
