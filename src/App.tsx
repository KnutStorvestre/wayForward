import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import LandaasActivities from "./pages/LandaasActivities";
import HomeWorkHelp from "./pages/landaasAktiviteter/HomeworkHelp";
import CyclerRepairs from "./pages/landaasAktiviteter/CycleRepairs";
import GirlGroup from "./pages/landaasAktiviteter/GirlGroup";
import SotraActivities from "./pages/SotraActivities";
import RentalChoice from "./pages/RentalChoice";
import Partners from "./pages/Partners";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import "./App.css";
import Femmeren from "./pages/Femmeren";
import SotraRentalPremise from "./pages/SotraRentalPremise";
import FridayClub from "./pages/landaasAktiviteter/FridayClub";

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
          element={<HomeWorkHelp />}
        />
        <Route
          path="/landaas-aktiviteter/sykkelverksted"
          element={<CyclerRepairs />}
        />
        <Route
          path="/landaas-aktiviteter/jentegruppe"
          element={<GirlGroup />}
        />
        <Route
          path="/landaas-aktiviteter/fredagsklubb"
          element={<FridayClub />}
        />
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
