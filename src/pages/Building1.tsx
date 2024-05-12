import { ImageSlider } from "./components/ImageSlider";
import car1 from "../assets/car-1.jpg";
import car2 from "../assets/car-2.jpg";
import car3 from "../assets/car-3.jpg";
import car4 from "../assets/car-4.jpg";
import car5 from "../assets/car-5.jpg";
import "./styles/Building.css";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const InfoBoxData = [
  {
    title: "Nøkkelinfo",
    data: [
      { key: "Adresse", value: "museplassen 3, 5007 Bergen" },
      { key: "Størrelse", value: "200m2" },
      { key: "Pris", value: "2000kr per time" },
      { key: "Antall rom", value: "5" },
      { key: "Antall toaletter", value: "2" },
      { key: "Antall dusjer", value: "1" },
      { key: "Antall kjøkken", value: "1" },
      { key: "Antall parkeringsplasser", value: "2" },
    ],
  },
  {
    title: "Nøkkelinfo",
    data: [
      { key: "Adresse", value: "museplassen 3, 5007 Bergen" },
      { key: "Størrelse", value: "200m2" },
      { key: "Pris", value: "2000kr per time" },
      { key: "Antall rom", value: "5" },
      { key: "Antall toaletter", value: "2" },
      { key: "Antall dusjer", value: "1" },
      { key: "Antall kjøkken", value: "1" },
      { key: "Antall parkeringsplasser", value: "2" },
    ],
  },
  {
    title: "Nøkkelinfo",
    data: [
      { key: "Adresse", value: "museplassen 3, 5007 Bergen" },
      { key: "Størrelse", value: "200m2" },
      { key: "Pris", value: "2000kr per time" },
      { key: "Antall rom", value: "5" },
      { key: "Antall toaletter", value: "2" },
      { key: "Antall dusjer", value: "1" },
      { key: "Antall kjøkken", value: "1" },
      { key: "Antall parkeringsplasser", value: "2" },
    ],
  },
  {
    title: "Nøkkelinfo",
    data: [
      { key: "Adresse", value: "museplassen 3, 5007 Bergen" },
      { key: "Størrelse", value: "200m2" },
      { key: "Pris", value: "2000kr per time" },
      { key: "Antall rom", value: "5" },
      { key: "Antall toaletter", value: "2" },
      { key: "Antall dusjer", value: "1" },
      { key: "Antall kjøkken", value: "1" },
      { key: "Antall parkeringsplasser", value: "2" },
    ],
  },
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
        <div className="flex-column">
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
      <div className="container-list">
        {InfoBoxData.map((infoBox, index) => (
          <InfoBox key={index} title={infoBox.title} data={infoBox.data} />
        ))}
      </div>
      <p>"Ta gjerne Kontakt:)"</p>
      <p>Sjekk her når bygget er ledig</p>
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

interface InfoBoxProps {
  title: string;
  data: { key: string; value: string }[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, data }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul className="list">
        {data.map((item, index) => (
          <li key={index}>
            <span>{item.key}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Building1;
