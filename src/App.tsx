import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Landaas from "./pages/Landaas";
import Sotra from "./pages/Sotra";
import Leie from "./pages/Leie";
import Building1 from "./pages/Building1";
import Building2 from "./pages/Building2";
import Partners from "./pages/Partnere";
import Footer from "./content/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/landaas" element={<Landaas />} />
        <Route path="/sotra" element={<Sotra />} />
        <Route path="/leie" element={<Leie />} />
        <Route path="/leie/bygg1" element={<Building1 />} />
        <Route path="/leie/bygg2" element={<Building2 />} />
        <Route path="/partnere" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
