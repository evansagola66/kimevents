import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import TentHire from "./pages/TentHire";
import ChairTableHire from "./pages/ChairTableHire";
import DecorDraping from "./pages/DecorDraping";
import CateringEquipment from "./pages/CateringEquipment";
import GeneratorHire from "./pages/GeneratorHire";
import EventManagement from "./pages/EventManagement";
import CarpetFlooring from "./pages/CarpetFlooring";
import TransportLogistics from "./pages/TransportLogistics";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tent-hire" element={<TentHire />} />
          <Route path="/chair-table-hire" element={<ChairTableHire />} />
          <Route path="/decor-draping" element={<DecorDraping />} />
          <Route path="/catering-equipment" element={<CateringEquipment />} />
          <Route path="/generator-hire" element={<GeneratorHire />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/carpet-flooring" element={<CarpetFlooring />} />
          <Route path="/transport-logistics" element={<TransportLogistics />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
