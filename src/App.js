import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FamilyCare from "./pages/familyCare/FamilyCare";
import Greeting from "./pages/greeting/Greeting";
import Home from "./pages/home/Home";
import LongCare from "./pages/longCare/LongCare";
import VisitingBath from "./pages/visitingBath/VisitingBath";
import VisitingCare from "./pages/visitingCare/VisitingCare";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/longcare" element={<LongCare />} />
        <Route path="/familycare" element={<FamilyCare />} />
        <Route path="/visitingcare" element={<VisitingCare />} />
        <Route path="/visitingbath" element={<VisitingBath />} />
      </Route>
    </Routes>
  );
}

export default App;
