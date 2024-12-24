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
        Øygarden Kraftsenter er et allsidig lokale som passer til en rekke
        arrangementer, fra intime samlinger til større feiringer. Når du
        leier lokalet, får du tilgang til en moderne spisesal med et 
        tilhørende kjøkken og en sofakrok med monitor, som skaper en hyggelig
        og funksjonell atmosfære for alle typer arrangementer. Enten du
        planlegger en romantisk bryllupsfeiring, en fargerik bursdag,
        eller et viktig møte, gir dette lokalet den perfekte rammen 
        for en vellykket sammenkomst.
      `,
    },
    {
      isStrong: false,
      content: `
        Lokalet er praktisk inndelt, med hovedgangen som knutepunkt.
        På høyre side finner du en stor spisesal med nok bord og stoler 
        til over 40 personer, samt et velutstyrt kjøkken. Kjøkkenet har
        et stort kjøleskap med fryseboks, komfyr og alt av nødvendig 
        kjøkkenutstyr, fra bestikk til skjærebrett. Ved siden av kjøkkenet 
        ligger en hyggelig sofakrok, perfekt for pauser og uformelle samtaler.
      `,
    },
    {
      isStrong: false,
      content: `
        På venstre side av gangen finner du et aktivitetsrom med to foosball-bord,
        som er populære blant gjester i alle aldre. Videre ligger en romslig
        dansesal med speil på veggene og et stort lydanlegg, perfekt for feiringer
        som ønsker musikk og dans som en del av opplevelsen. I enden av gangen
        finner du tre toaletter, inkludert ett handicaptoalett, som sikrer god
        tilgjengelighet for alle.
      `,
    },
    {
      isStrong: false,
      content: `
        Øygarden Kraftsenter tilbyr rikelig med parkeringsplasser
        (ca. 23 mot betaling), og den sentrale beliggenheten gjør det enkelt
        å organisere arrangementer uten logistiske utfordringer. Lokalet passer
        ypperlig til elegante bryllup, livlige bursdagsfester eller produktive
        møter, og gir en komfortabel og funksjonell ramme for enhver anledning.
      `,
    },
  ],
  keyInfo: [
    [
      "Størrelse inneområde: 200m²",
      "Antall rom: 8",
      "Kapasitet: 40 personer",
      "Etasje: 1",
    ],
    [
      "Parkeringsplasser: 23+",
      "Antall bord: 8+",
      "Antall stoler: 40+",
      "Foosball-bord: 2",
    ],
    ["Standard toaletter: 2", "Handicap toalett: 1"],
  ],
  facilities: [
    [
      "Rullestoltilgang",
      "God tillgang kollektivtransport",
      "Parkeringsplasser",
      "Kjøkken",
    ],
    ["Spisesal", "Gang", "Dansesal", "Foosball-rom"],
    ["Sofoakrok", "Standard toaletter", "Handicap toalett", "Lydanlegg"],
  ],
  s3BucketLink:
    "https://availability-way-forward.s3.amazonaws.com/sotra-availability.json",
  contactInfo: {
    contactName: "Rasmus Solberg",
    phoneNumber: "+47 404 06 098",
    email: "rasmus@wayforward.no",
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
