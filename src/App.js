import PageDriveway from "./pages/PageDriveway";
import PageEcoGarden from "./pages/PageEcoGarden";
import PageReception from "./pages/PageReception";
import PageBistro from "./pages/PageBistro";
import PageHome from "./pages/PageHome";
import AppShell from "./components/AppShell";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <AppShell />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/driveway" element={<PageDriveway />} />
        <Route path="/ecogarden" element={<PageEcoGarden />} />
        <Route path="/reception" element={<PageReception />} />
        <Route path="/bistro" element={<PageBistro />} />
      </Routes>
    </div>
  );
}

export default App;
