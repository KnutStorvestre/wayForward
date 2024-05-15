import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Landaas from "./pages/Landaas";
import Sotra from "./pages/Sotra";
import Rental from "./pages/Rental";
import Partners from "./pages/Partnere";
import Footer from "./content/Footer";
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
        <Route path="/utleie" element={<Rental />} />
        <Route path="/utleie/femmeren" element={<Femmeren />} />
        <Route
          path="/utleie/SotraRentalPremise"
          element={<SotraRentalPremise />}
        />
        <Route path="/partnere" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
