import { useState } from "react";
import "./styles/Partners.css";
import BergenKommune from "../assets/partner-logos/Bergen-kommune.png";
import Bufdir from "../assets/partner-logos/bufdir-logo.png";
import equinor from "../assets/partner-logos/equinor-logo.png";
import spv from "../assets/partner-logos/SPV.png";

import damLogo from "../assets/partner-logos/dam-logo.png";
import norskFolkehjelp from "../assets/partner-logos/norsk-folkehjelp-logo.png";
import navLogo from "../assets/partner-logos/nav-logo.png";
import ulvsenoyLogo from "../assets/partner-logos/ulvsnesoy-skolehjem-logo.png";

import sparebank1 from "../assets/partner-logos/sparebank1.png";
import oygarden from "../assets/partner-logos/oygarden-logo.png";
import fanaBank from "../assets/partner-logos/fana-bank.png";

const Partners = () => {
  const [color, setColor] = useState("#f5f5f5"); // Initial color (blue in this case)
  const [textColor, setTextColorHead] = useState("#333"); // Initial text color (white in this case)
  const [textColorP, setTextColorPara] = useState("#555"); // Initial text color (white in this case)

  const handleClick = () => {
    // Generate a random color for the box
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(newColor);

    // Calculate inverse color for text
    const invertedColor = invertColor(newColor);
    setTextColorHead(invertedColor);
    setTextColorPara(invertedColor);
  };

  // Function to calculate inverse color (for text)
  const invertColor = (hex: string) => {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // Convert hex to RGB
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

    // Ensure each component has two digits
    const invertedHex = `${padZero(r)}${padZero(g)}${padZero(b)}`;
    return `#${invertedHex}`;
  };

  const padZero = (str: string) => {
    return str.length === 1 ? `0${str}` : str;
  };

  return (
    <div className="page-container padding-bottom-200 padding-top-7rem">
      <div className="max-width-container">
        <div
          className={`thank-you-section`}
          style={{ background: color, color: textColor }}
          onClick={handleClick}
        >
          <h1 style={{ color: textColor }}>Takk til våre sponsorer</h1>
          <p style={{ color: textColorP }}>
            Vi ønsker å uttrykke vår dype takknemlighet til våre generøse
            sponsorer for deres støtte til vårt fritidsprogram for barn. Deres
            bidrag har hatt en betydelig innvirkning på å berike livene til
            barna i vårt lokalsamfunn.
          </p>
        </div>
        <div className="partners">
          <div className="partners-row">
            <img src={BergenKommune} alt="Bergen Kommune" />
            <img src={Bufdir} alt="Bufdir" />
            <img src={equinor} alt="Equinor" />
            <img src={spv} alt="SPV" />
          </div>
          <div className="partners-row">
            <img src={damLogo} alt="Dam Logo" />
            <img src={norskFolkehjelp} alt="Norsk Folkehjelp" />
            <img src={navLogo} alt="Nav Logo" />
            <img src={ulvsenoyLogo} alt="Ulvsnesøy Skolehjem" />
          </div>
          <div className="partners-row partners-row-bottom">
            <img src={sparebank1} alt="Sparebank1" />
            <img src={oygarden} alt="Øygarden" />
            <img src={fanaBank} alt="Fana Bank" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
