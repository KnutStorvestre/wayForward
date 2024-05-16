import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Landaas from "./pages/Landaas";
import Sotra from "./pages/Sotra";
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
        <Route path="/landaas" element={<Landaas />} />
        <Route path="/sotra" element={<Sotra />} />
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
