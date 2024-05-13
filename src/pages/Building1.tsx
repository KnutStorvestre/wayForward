import { ImageSlider } from "./components/ImageSlider";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car5 from "../assets/car-5.jpg";
import "./styles/Building.css";
import { ArrowRight } from "lucide-react";

const IMAGES = [
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
  "God tilgang for rullestol",
  "Nært bybane",
  "Uteområde",
  "Kjøkken",
];

const Building1 = () => {
  return (
    <div className="wide-container">
      <TopText />
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <ImageSlider images={IMAGES} />
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        voluptates voluptate eum ipsum iure? Commodi quia, laudantium maiores
        dignissimos non quod perferendis consectetur debitis accusamus sequi,
        iusto aspernatur rerum possimus, sapiente nisi placeat ipsum nulla
        doloribus doloremque eum explicabo officiis labore. Atque quisquam ab ad
        totam ex ducimus, dolore dignissimos libero eligendi iste ipsum.
        Asperiores quaerat error in praesentium impedit dolorem natus, veniam ut
        commodi minima necessitatibus ex enim totam odio perferendis, dolores,
        eos corporis. Exercitationem et aut nam velit aspernatur eos eum
        assumenda beatae debitis distinctio laudantium vitae tempore neque ullam
      </p>
      <div>
        <InfoBox title="Nøkkelinfo" />
        <div className="list-rows">
          <ul className="custom-list">
            <CustomListItem>Størrelse: 200m2</CustomListItem>
            <CustomListItem>Antall rom: 5</CustomListItem>
            <CustomListItem>Antall toaletter: 2</CustomListItem>
            <CustomListItem>Etasje: 1</CustomListItem>
          </ul>
          <ul className="custom-list">
            <CustomListItem>Parkeringsplasser: 10</CustomListItem>
            <CustomListItem>Antall stoler: 10</CustomListItem>
            <CustomListItem>Antall benker: 12</CustomListItem>
            <CustomListItem>Antall bord: 4</CustomListItem>
          </ul>
          <ul className="custom-list">
            <CustomListItem>Byggeår: 1970</CustomListItem>
            <CustomListItem>Tomteareal: 6764 m²</CustomListItem>
          </ul>
        </div>
      </div>
      <InfoBox title="Fasiliteter" />
      <div className="list-rows">
        <ul className="custom-list">
          <CustomListItem>God tilgang for rullestol</CustomListItem>
          <CustomListItem>Nært bybane</CustomListItem>
          <CustomListItem>Uteområde</CustomListItem>
          <CustomListItem>Kjøkken</CustomListItem>
        </ul>
      </div>
      <InfoBox title="Kalender" />
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
      <InfoBox title="Kontakt" />
      <div className="bottom-infobox">
        <div className="justify-space-between">
          <div>
            <p>Noe du lurer på?</p>
          </div>
          <div className="contact-info-building">
            <span>Kontakt: Rasmus Solberg</span>
            <span>tlf: +47 555 55 555</span>
            <span>e-post: post@wayforward.com</span>
          </div>
        </div>
      </div>
      <InfoBox title="Pris" />
      <div className="bottom-infobox">
        <p>Dette er et 100% gratis tilbud av Bergen kommune</p>
      </div>
    </div>
  );
};

function TopText() {
  return (
    <div className="top-text">
      <h1 className="extra-bold-inter">Bygg1</h1>
    </div>
  );
}

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

interface InfoBoxProps {
  title: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title }) => {
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
