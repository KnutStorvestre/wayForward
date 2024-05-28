import React from "react";
import skywoods from "../assets/images/sky-woods.jpg";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import OldHouse from "../assets/images/old-house.jpg";
import OldGermanHouse from "../assets/images/old-german-house.jpg";
import ManOnMountain from "../assets/images/man-on-mountain.jpg";

const Home = () => {
  return (
    <div className="page-container padding-top-home">
      <div className="image-container">
        <img className="main-img" src={skywoods} alt="Sky Woods" />
      </div>
      <HrHeader title="Aktiviteter" />
      <div className="home-cards">
        <Card
          image={OldHouse}
          title="Landås"
          text="Hvilken type aktiviteter tilbyr vi."
          path="/landaas"
        />
        <Card
          image={OldHouse}
          title="Sotra"
          text="Hvilken type aktiviteter tilbyr vi."
          path="/sotra"
        />
      </div>
      <HrHeader title="Utleie og utlån" />
      <div className="home-cards">
        <Card
          image={OldGermanHouse}
          title="Se våre lokaler"
          text="Hva kan du leie og hvem kan leie og hvorfor leier vi ut lokaler"
          path="/utleie"
        />
      </div>
      <HrHeader title="Om oss" />
      <div className="home-cards">
        <Card
          image={ManOnMountain}
          title="Hvem er vi"
          text="Hva gjør vi og hvorfor gjør vi det"
          path="/om-oss"
        />
      </div>
      <HrHeader title="Partnere" />
      <p>Kan trykke på sponsorer</p>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  text: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ image, title, text, path }) => {
  return (
    <Link className="no-underline" to={path}>
      <div className="home-card">
        <img src={image} alt={title} className="home-card-image" />
        <div className="home-card-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

interface HrHeaderProps {
  title: string;
}

const HrHeader: React.FC<HrHeaderProps> = ({ title }) => {
  return (
    <div className="hr-header">
      <hr className="header-line" />
      <h1 className="header-title">{title}</h1>
      <hr className="header-line" />
    </div>
  );
};

export default Home;
