import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio.tsx";
import About from "./pages/About/About.tsx";
import { routes } from "./data/routes.ts";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Inicio />} />
      <Route path={routes.about} element={<About />} />
    </Routes>
  );
}

export default App;
