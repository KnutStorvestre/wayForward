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
      I Joachim Lampes vei 5 kan du leie et koselig lokale som passer perfekt til 
      arrangementer som bryllup, bursdager, møter og religiøse feiringer. Med sine 
      fleksible fasiliteter og vakre uteområder, tilbyr dette lokalet en unik ramme 
      for ditt arrangement, enten du ønsker en dag fylt med utendørsaktiviteter eller 
      et intimt innendørs selskap.
      `,
    },
    {
      isStrong: false,
      content: `
      Lokalet består av to rom: et spiserom og et fullt utstyrt kjøkken. Spiserommet 
      gir god plass til dine gjester og er perfekt for måltider, taler eller andre 
      samlingsaktiviteter. Kjøkkenet er praktisk og utstyrt med alt du trenger, fra 
      komfyr og kjøleskap til nødvendige redskaper som tallerkener, glass og bestikk. 
      Dette gjør det enkelt å servere mat og drikke til dine gjester, enten du ordner 
      alt selv eller bruker catering.
      `,
    },
    {
      isStrong: false,
      content: `
      De flotte uteområdene er en av lokalets største fordeler. Her finner du en 
      gressplen som gir en åpen og avslappende atmosfære, utebord med benker for 
      sosialt samvær, og en lekeplass som gjør det til et familievennlig valg. 
      Uteområdet gir også gode muligheter for utendørsaktiviteter, fotografering 
      eller en avslappet pause i frisk luft. Dette gjør lokalet ideelt for 
      arrangementer som ønsker å kombinere det beste av inne- og utendørsopplevelser.
      `,
    },
    {
      isStrong: false,
      content: `
      I tillegg til de vakre omgivelsene og de praktiske innendørsfasilitetene, er 
      lokalet lett tilgjengelig med en sentral beliggenhet i Bergen. Med kombinasjonen 
      av funksjonalitet, sjarm og idylliske uteområder, er Joachim Lampes vei 5 et 
      utmerket valg for alle typer feiringer og samlinger.
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
    lat: 60.36165554826739,
    lng: 5.363863074396288,
  },
};

const Femmeren = () => {
  return <RentalPremise {...femmerenData} />;
};

export default Femmeren;
