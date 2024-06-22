import "./styles/Partners.css";
import BergenKommune from "../assets/newLogoes/Bergen-kommune.png";
import Bufdir from "../assets/newLogoes/bufdir-logo.png";
import equinor from "../assets/newLogoes/equinor-logo.png";
import spv from "../assets/newLogoes/SPV.png";

import damLogo from "../assets/newLogoes/dam-logo.png";
import norskFolkehjelp from "../assets/newLogoes/norsk-folkehjelp-logo.png";
import navLogo from "../assets/newLogoes/nav-logo.png";
import ulvsenoyLogo from "../assets/newLogoes/ulvsnesoy-skolehjem-logo.png";

import sparebank1 from "../assets/newLogoes/sparebank1.png";
import oygarden from "../assets/newLogoes/oygarden-logo.png";
import fanaBank from "../assets/newLogoes/fana-bank.png";

const Partners = () => {
  return (
    <div className="page-container padding-bottom-90">
      <h1 style={{ padding: "6rem 0 2rem 2rem" }}>Partnere</h1>
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
  );
};

export default Partners;
