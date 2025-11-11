import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio.tsx";
import About from "./pages/About/About.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/src/pages/About/About.tsx" element={<About />}></Route>
    </Routes>
  );
}

export default App;
