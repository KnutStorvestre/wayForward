import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import LandaasActivities from "./pages/LandaasActivities";
import HomeWorkHelpLandaas from "./pages/landaasAktiviteter/HomeworkHelpLandaas";
import CyclerRepairsLandaas from "./pages/landaasAktiviteter/CycleRepairsLandaas";
import GirlGroupLandaas from "./pages/landaasAktiviteter/GirlGroupLandaas";
import FridayClubLandaas from "./pages/landaasAktiviteter/FridayClubLandaas";
import SotraActivities from "./pages/SotraActivities";
import GirlGroupSotra from "./pages/sotraAktivities/GirlGroupSotra";
import HomeWorkHelpSotra from "./pages/sotraAktivities/HomeworkHelpSotra";
import YouthCafe from "./pages/sotraAktivities/YouthCafe";
import RentalChoice from "./pages/RentalChoice";
import Partners from "./pages/Partners";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import "./App.css";
import Femmeren from "./pages/Femmeren";
import SotraRentalPremise from "./pages/SotraRentalPremise";

function App() {
  return (
    <div id="main-container">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<AboutUs />} />
        <Route path="/landaas-aktiviteter" element={<LandaasActivities />} />
        <Route
          path="/landaas-aktiviteter/leksehjelp"
          element={<HomeWorkHelpLandaas />}
        />
        <Route
          path="/landaas-aktiviteter/sykkelverksted"
          element={<CyclerRepairsLandaas />}
        />
        <Route
          path="/landaas-aktiviteter/jentegruppe"
          element={<GirlGroupLandaas />}
        />
        <Route
          path="/landaas-aktiviteter/fredagsklubb"
          element={<FridayClubLandaas />}
        />
        <Route
          path="/sotra-aktiviteter/leksehjelp"
          element={<HomeWorkHelpSotra />}
        />
        <Route
          path="/sotra-aktiviteter/jentegruppe"
          element={<GirlGroupSotra />}
        />
        <Route path="/sotra-aktiviteter/ungdomskafe" element={<YouthCafe />} />
        <Route path="/sotra-aktiviteter" element={<SotraActivities />} />
        <Route path="/utleie" element={<RentalChoice />} />
        <Route path="/utleie/femmeren" element={<Femmeren />} />
        <Route path="/utleie/sotra-utleie" element={<SotraRentalPremise />} />
        <Route path="/partnere" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
