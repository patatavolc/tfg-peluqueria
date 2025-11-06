import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Fressas Peluquería</h1>
      </div>

      <nav className="header__nav">
        <ul>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#products">Productos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      <div className="header__actions">
        <button className="login-btn">Iniciar Sesión</button>
      </div>
    </header>
  )
}