import React from "react";
import skywoods from "../assets/sky-woods.jpg";
import "./styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="image-container">
        <img className="main-img" src={skywoods} alt="Sky Woods" />
        <div className="area-cards">
          <AreaCard areaName="Landås" backgroundColor="#99C4CA" />
          <AreaCard areaName="Sotra" backgroundColor="#FAB46E" />
        </div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

interface AreaCardProps {
  areaName: string;
  backgroundColor: string;
}

const AreaCard: React.FC<AreaCardProps> = ({ areaName, backgroundColor }) => {
  return (
    <div
      className="area-card"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <header>{areaName}</header>
    </div>
  );
};

export default Home;
