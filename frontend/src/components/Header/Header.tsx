import "./Header.css";
import Button from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Fressas Peluquería</h1>
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/src/pages/About/About.tsx">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/src/pages/Services/Services.tsx">Servicios</Link>
          </li>
          <li>
            <Link to="/src/pages/Products/Products.tsx">Productos</Link>
          </li>
          <li>
            <Link to="/src/pages/Services/Contact.tsx">Contacto</Link>
          </li>
        </ul>

        <div className="header__actions">
          <Button text="Iniciar Sesion" />
        </div>
      </nav>
    </header>
  );
}
