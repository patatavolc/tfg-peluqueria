/**
 * Header Component
 *
 * Cabecera principal de la aplicación con navegación y acciones.
 * Incluye logo con enlace a home, menú de navegación dinámico desde routes.ts
 * y botón de inicio de sesión.
 *
 * Características:
 * - Logo clickeable que redirige al home
 * - Navegación dinámica desde datos centralizados (data/routes.ts)
 * - Botón de acción (Iniciar Sesión)
 * - Sticky en desktop (se mantiene visible al hacer scroll)
 *
 * @example
 * // Uso básico en Layout
 * <Layout>
 *   <Header />
 *   <main>{children}</main>
 *   <Footer />
 * </Layout>
 *
 * Nota: Para añadir o modificar links de navegación, edita el archivo
 * src/data/routes.ts en lugar de modificar este componente.
 */

import "./Header.css";
import Button from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { navItems, routes } from "../../data/routes.ts";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={routes.home}>
          <h1>Fressas Peluquería</h1>
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <Button text="Iniciar Sesión" size="small" />
        </div>
      </nav>
    </header>
  );
}
