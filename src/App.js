import PageLocation1 from "./pages/PageLocation1";
import PageLocation2 from "./pages/PageLocation2";
import PageLocation3 from "./pages/PageLocation3";
import PageHome from "./pages/PageHome";
import AppShell from "./components/AppShell";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <AppShell />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/location1" element={<PageLocation1 />} />
        <Route path="/location2" element={<PageLocation2 />} />
        <Route path="/location3" element={<PageLocation3 />} />
      </Routes>
    </div>
  );
}

export default App;
