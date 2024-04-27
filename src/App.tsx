import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import Landaas from "./pages/Landaas";
import Leie from "./pages/Leie";
import Footer from "./content/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landaas" element={<Landaas />} />
          <Route path="/leie" element={<Leie />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
