import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FamilyCare from "./pages/familyCare/FamilyCare";
import Greeting from "./pages/greeting/Greeting";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/familycare" element={<FamilyCare />} />
      </Route>
    </Routes>
  );
}

export default App;
