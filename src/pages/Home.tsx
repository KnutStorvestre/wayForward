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
      <HrHeader title="Aktiviteter" />
      <HrHeader title="Utleie" />
      <HrHeader title="Om oss" />
      <p style={{ textAlign: "center" }}>Logo her</p>
      <HrHeader title="Partnere" />
    </div>
  );
};

interface HrHeaderProps {
  title: string;
}

const HrHeader: React.FC<HrHeaderProps> = ({ title }) => {
  return (
    <div className="hr-header">
      <hr />
      <h1>{title}</h1>
      <hr />
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
