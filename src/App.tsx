import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import Landaas from "./pages/Landaas";
import Sotra from "./pages/Sotra";
import Leie from "./pages/Leie";
import Footer from "./content/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landaas" element={<Landaas />} />
        <Route path="/leie" element={<Leie />} />
        <Route path="/sotra" element={<Sotra />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
