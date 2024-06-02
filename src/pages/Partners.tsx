import "./styles/Partners.css";
import BergenKommuneLogo from "../assets/sponsors/bergen-kommune-vertikal-logo.png";
import BufdirLogo from "../assets/sponsors/bufdir-logo.png";
import EquinorLogo from "../assets/sponsors/equinor-logo.png";
import FanaSparebank from "../assets/sponsors/fana-sparebank-logo.webp";
import NavLogo from "../assets/sponsors/nav-logo.png";
import NorskFolkeHjelpLogo from "../assets/sponsors/norsk-folkehjelp-logo.png";
import OygardenLogo from "../assets/sponsors/oygarden-logo.png";
import SparebankenVest from "../assets/sponsors/sparebanken-vest-logo.png";
import StiftelsenDam from "../assets/sponsors/stiftelsen-dam-logo.png";
import UlvsnesoySkolehjem from "../assets/sponsors/ulvsnesoy-skolehjem-logo.jpeg";

const Partners = () => {
  return (
    <div className="page-container">
      <h1 style={{ padding: "6rem 0 2rem 2rem" }}>Partnere</h1>
      <div className="partners">
        <img src={BergenKommuneLogo} alt="Bergen Kommune" />
        <img src={BufdirLogo} alt="Bufdir" />
        <img src={EquinorLogo} alt="Equinor" />
        <img src={FanaSparebank} alt="Fana Sparebank" />
        <img src={NavLogo} alt="NAV" />
        <img src={NorskFolkeHjelpLogo} alt="Norsk Folkehjelp" />
        <img src={OygardenLogo} alt="Øygarden Kommune" />
        <img src={SparebankenVest} alt="Sparebanken Vest" />
        <img src={StiftelsenDam} alt="Stiftelsen Dam" />
        <img src={UlvsnesoySkolehjem} alt="Ulvsnesøy Skolehjem" />
      </div>
    </div>
  );
};

export default Partners;
