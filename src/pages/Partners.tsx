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
    <div className="page-container">
      <h1 style={{ padding: "6rem 0 2rem 2rem" }}>Partnere</h1>
      <div className="partners">
        <div className="partners-row">
          <img src={BergenKommune} alt="Bergen Kommune" />
          <img src={Bufdir} alt="Bergen Kommune" />
          <img src={equinor} alt="Bergen Kommune" />
          <img src={spv} alt="Bergen Kommune" />
        </div>
        <div className="partners-row">
          <img src={damLogo} alt="Bergen Kommune" />
          <img src={norskFolkehjelp} alt="Bergen Kommune" />
          <img src={navLogo} alt="Bergen Kommune" />
          <img src={ulvsenoyLogo} alt="Bergen Kommune" />
        </div>
        <div className="partners-row-bottom">
          <img src={sparebank1} alt="Bergen Kommune" />
          <img src={oygarden} alt="Bergen Kommune" />
          <img src={fanaBank} alt="Bergen Kommune" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
