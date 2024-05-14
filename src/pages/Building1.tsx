import { ImageSlider } from "./components/ImageSlider";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car5 from "../assets/car-5.jpg";
import "./styles/Building.css";
import { ArrowRight } from "lucide-react";

const images = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const keyInfo = [
  ["Størrelse: 200m2", "Antall rom: 5", "Antall toaletter: 2", "Etasje: 1"],
  [
    "Parkeringsplasser: 10",
    "Antall stoler: 10",
    "Antall benker: 12",
    "Antall bord: 4",
  ],
  ["Byggeår: 1970", "Tomteareal: 6764 m²"],
];

const facilities = [
  ["God tilgang for rullestol", "Nært bybane", "Uteområde", "Kjøkken"],
  ["God tilgang for rullestol", "Nært bybane", "Uteområde"],
];

const Building1 = () => {
  return (
    <div className="wide-container">
      <TopText />
      <div className="img-slider">
        <ImageSlider images={images} />
      </div>
      <a
        href={
          "https://www.google.com/maps/place/Universitetsaulaen/@60.3874112,5.3222966,18z/data=!4m6!3m5!1s0x463cff4f1413a72f:0x497f992ec2c19fcc!8m2!3d60.3873984!4d5.3220588!16s%2Fg%2F11flrxrvqb?entry=ttu"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="address-container">
          <span className="address">museplassen 3</span>
          <span className="address">5007 Bergen</span>
        </div>
      </a>
      <p className="semibold-inter">
        Leiligheten er lys og romslig med en gjennomgående god standard. Delikat
        IKEA-kjøkken med kjøkkenøy og åpen løsning mot stuen. Stor og
        møbleringsvennlig stue med peisovn og utgang til balkong med kveldssol.
        Pent, flislagt baderom med både badekar og dusjsone, som ble utvidet og
        rehabilitert i regi av sameiet i 2022. Tre gode soverom ligger
        barnevennlig i tilknytning til hverandre. Hovedsoverommet har utgang til
        sørvestvendt balkong med hyggelig utsyn. Videre har man en praktisk
        entré med god skapplass. Leiligheten har gode lagringsmuligheter.
      </p>
      <InfoBoxHeader title="Nøkkelinfo" />
      <InfoLists keyInfo={keyInfo} />
      <InfoBoxHeader title="Fasiliteter" />
      <InfoLists keyInfo={facilities} />
      <InfoBoxHeader title="Kalender" />
      <div className="bottom-infobox">
        <p>
          Sjekk vår kalender for når lokalet er ledig trykk{" "}
          <a
            href={
              "https://docs.google.com/spreadsheets/d/155uVn2gt71zkFXzGeMBP0O9ZgEG5O5raqgvOM-GO_Z8/edit?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            her.
          </a>
        </p>
      </div>
      <InfoBoxHeader title="Kontakt" />
      <ContactInfo
        contactName="Rasmus Solberg"
        phoneNumber="+47 555 55 555"
        email="post@wayforward.com"
      />
      <InfoBoxHeader title="Pris" />
      <div className="bottom-infobox">
        <p>Dette er et 100% gratis tilbud av Bergen kommune</p>
      </div>
      <InfoBoxHeader title="Beliggenhet" />
      <div className="bottom-infobox">
        <p>Kansje kart her</p>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  contactName: string;
  phoneNumber: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  contactName,
  phoneNumber,
  email,
}) => {
  return (
    <div className="bottom-infobox">
      <div className="justify-space-between">
        <div>
          <p>Noe du lurer på?</p>
        </div>
        <div className="contact-info-building">
          <span>Kontakt: {contactName}</span>
          <span>tlf: {phoneNumber}</span>
          <span>e-post: {email}</span>
        </div>
      </div>
    </div>
  );
};

function TopText() {
  return (
    <div className="top-text-box">
      <h1 className="extra-bold-inter">Bygg1</h1>
    </div>
  );
}

interface InfoListsProps {
  keyInfo: string[][];
}

const InfoLists: React.FC<InfoListsProps> = ({ keyInfo }) => {
  return (
    <div className="list-rows">
      {keyInfo.map((list, index) => (
        <ul key={index} className="custom-list">
          {list.map((item, idx) => (
            <CustomListItem key={idx}>{item}</CustomListItem>
          ))}
        </ul>
      ))}
    </div>
  );
};

interface CustomListItemProps {
  children: React.ReactNode;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ children }) => {
  return (
    <li className="custom-list-item">
      <ArrowRight color="black" size={16} />
      {children}
    </li>
  );
};

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => {
  return (
    <div>
      <div className="info-box-header-br">
        <header className="header-info-box">{title}</header>
        <hr />
      </div>
    </div>
  );
};

export default Building1;
