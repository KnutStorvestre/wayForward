import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./util/ScrollToTop";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const PageNotFound = React.lazy(() => import("./pages/NotFoundPage"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const LandaasActivities = React.lazy(() => import("./pages/ActivitiesLandaas"));
const HomeWorkHelpLandaas = React.lazy(
  () => import("./pages/landaasActivities/HomeworkHelpLandaas")
);
const CyclerRepairsLandaas = React.lazy(
  () => import("./pages/landaasActivities/CycleRepairsLandaas")
);
const GirlGroupLandaas = React.lazy(
  () => import("./pages/landaasActivities/GirlGroupLandaas")
);
const FridayClubLandaas = React.lazy(
  () => import("./pages/landaasActivities/FridayClubLandaas")
);
const SummerActivities = React.lazy(
  () => import("./pages/landaasActivities/SummerActivities")
);
const SotraActivities = React.lazy(() => import("./pages/ActivitiesSotra"));
const GirlGroupSotra = React.lazy(
  () => import("./pages/sotraActivities/GirlGroupSotra")
);
const HomeWorkHelpSotra = React.lazy(
  () => import("./pages/sotraActivities/HomeworkHelpSotra")
);
const YouthCafeSotra = React.lazy(
  () => import("./pages/sotraActivities/YouthCafeSotra")
);
const RentalChoice = React.lazy(() => import("./pages/RentalChoice"));
const Partners = React.lazy(() => import("./pages/Partners"));
const Femmeren = React.lazy(() => import("./pages/Femmeren"));
const SotraRentalPremise = React.lazy(
  () => import("./pages/SotraRentalPremise")
);

function App() {
  return (
    <div id="main-container">
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/landaas-aktiviteter" element={<LandaasActivities />} />
          <Route
            path="/landaas-aktiviteter/sommeraktiviteter"
            element={<SummerActivities />}
          />
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
          <Route
            path="/sotra-aktiviteter/ungdomskafe"
            element={<YouthCafeSotra />}
          />
          <Route path="/sotra-aktiviteter" element={<SotraActivities />} />
          <Route path="/utleie" element={<RentalChoice />} />
          <Route path="/utleie/femmeren" element={<Femmeren />} />
          <Route path="/utleie/sotra-utleie" element={<SotraRentalPremise />} />
          <Route path="/partnere" element={<Partners />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
