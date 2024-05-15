import React from "react";
import skywoods from "../assets/images/sky-woods.jpg";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="image-container">
        <img className="main-img" src={skywoods} alt="Sky Woods" />
        <div className="area-cards">
          <Link to="/landaas" className="no-underline">
            <AreaCard areaName="Landås" backgroundColor="#99C4CA" />
          </Link>
          <Link to="/sotra" className="no-underline">
            <AreaCard areaName="Sotra" backgroundColor="#FAB46E" />
          </Link>
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
