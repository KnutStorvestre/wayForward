import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import Landaas from "./pages/Landaas";
import Sotra from "./pages/Sotra";
import Leie from "./pages/Leie";
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
        <Route path="/landaas" element={<Landaas />} />
        <Route path="/leie" element={<Leie />} />
        <Route path="/sotra" element={<Sotra />} />
        <Route path="/partnere" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
