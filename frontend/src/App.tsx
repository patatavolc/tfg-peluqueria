import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio.tsx";
import About from "./pages/About/About.tsx";
import Services from './pages/Services/Services.tsx'
import { routes } from "./data/routes.ts";
import Products from "./pages/Products/Products.tsx";
import Contact from './pages/Contact/Contact.tsx';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Inicio />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.services} element={<Services />}/>
      <Route path={routes.products} element={<Products />} />
      <Route path={routes.contact} element={<Contact />} />
    </Routes>
  );
}

export default App;
