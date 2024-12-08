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
        Kjøkkenet er fullt utstyrt med det du trenger
        for å tilberede eller servere mat og drikke. Her
        finner du komfyr, et stort kjøleskap, og alt av
        nødvendige redskaper, inkludert tallerkener, bestikk,
        glass og kopper. Dette gjør det enkelt å organisere alt
        fra en sit-down middag til en buffet. Spisesalen har en
        komfortabel sofakrok hvor gjester kan slappe av, samtidig
        som monitoren kan brukes til presentasjoner eller underholdning.
      `,
    },
    {
      isStrong: false,
      content: `
        I tillegg til spiseområdet har Øygarden Kraftsenter flere
        unike fasiliteter. Til venstre for gangen finner du et rom med
        to foosball-bord, som tilfører en morsom og avslappet aktivitet
        for gjestene dine. Fortsetter du videre gjennom dette rommet,
        kommer du til et større rom utstyrt med et imponerende lydanlegg.
        Dette tomme rommet er svært fleksibelt og kan brukes til alt fra
        dans og musikkarrangementer til seremonielle formål, som religiøse
        feiringer eller spesielle samlinger. Det er også et bordtennisbord der.
      `,
    },
    {
      isStrong: false,
      content: `
        Lokalet er også tilrettelagt for alle gjester, med to ordinære toaletter og ett handicaptoalett lett
        tilgjengelig fra gangen. Øygarden Kraftsenter er designet for å være både funksjonelt og inviterende,
        og vi ser frem til å hjelpe deg med å arrangere et minneverdig event i våre hyggelige omgivelser.
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
    ["God tilgang for rullestol", "toaletter", "handicap toalett", "Kjøkken"],
    ["Spiselokale", "Parkeringsplasser"],
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
