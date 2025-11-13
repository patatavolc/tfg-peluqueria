import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio.tsx";
import About from "./pages/About/About.tsx";
import Services from './pages/Services/Services.tsx'
import { routes } from "./data/routes.ts";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Inicio />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.services} element={<Services />}/>
    </Routes>
  );
}

export default App;
