import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";
import car4 from "../../assets/car-4.jpg";
import car5 from "../../assets/car-5.jpg";
import { RentalPremiseData } from "./DataInterface";

export const rentalPremiseData: RentalPremiseData = {
  rentalPremiseName: "Femmeren",
  images: [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
  ],
  mapLink: "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu",
  address: "museplassen 3",
  zipCode: "5007 Bergen",
  apartmentDescription: `
  Leiligheten er lys og romslig med en gjennomgående god standard. Delikat
  IKEA-kjøkken med kjøkkenøy og åpen løsning mot stuen. Stor og
  møbleringsvennlig stue med peisovn og utgang til balkong med kveldssol.
  Pent, flislagt baderom med både badekar og dusjsone, som ble utvidet og
  rehabilitert i regi av sameiet i 2022. Tre gode soverom ligger
  barnevennlig i tilknytning til hverandre. Hovedsoverommet har utgang til
  sørvestvendt balkong med hyggelig utsyn. Videre har man en praktisk entré
  med god skapplass. Leiligheten har gode lagringsmuligheter.
  `,
  keyInfo: [
    ["Størrelse: 200m2", "Antall rom: 5", "Antall toaletter: 2", "Etasje: 1"],
    ["Parkeringsplasser: 10", "Antall stoler: 10", "Antall benker: 12", "Antall bord: 4"],
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
    email: "post@wayforward.com"
  },
  priceDescription: "Dette er et 100% gratis tilbud av Bergen kommune"
};
