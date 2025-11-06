import "./Header.css";
import Button from "../Button/Button.tsx";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Fressas Peluquería</h1>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#products">Productos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        <div className="header__actions">
          <Button text="Iniciar Sesion" />
        </div>
      </nav>
    </header>
  );
}
