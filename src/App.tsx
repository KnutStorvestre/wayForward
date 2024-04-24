import Navbar from "./content/Navbar";
import Home from "./pages/Home";
import Landaas from "./pages/Landaas";
import Footer from "./content/Footer";
import { Route, Routes } from "react-router-dom";
import "./styes.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landaas" element={<Landaas />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
