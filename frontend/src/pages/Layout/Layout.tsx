/**
 * Layout Component
 *
 * Componente de plantilla principal que envuelve todas las páginas.
 * Proporciona estructura consistente con Header sticky, área de contenido
 * que crece para llenar el espacio disponible, y Footer siempre al final.
 *
 * Estructura:
 * - Header: Sticky en la parte superior (siempre visible)
 * - Main: Área de contenido principal (crece con flex: 1)
 * - Footer: Siempre en la parte inferior
 *
 * @example
 * // Página básica con Layout
 * export default function MiPagina() {
 *   return (
 *     <Layout>
 *       <h1>Contenido de mi página</h1>
 *       <p>Este contenido estará entre Header y Footer</p>
 *     </Layout>
 *   );
 * }
 *
 * @example
 * // Página con múltiples secciones
 * export default function Inicio() {
 *   return (
 *     <Layout>
 *       <Hero title="Bienvenidos" subtitle="..." />
 *       <Section title="Servicios">
 *         <Grid>{services}</Grid>
 *       </Section>
 *     </Layout>
 *   );
 * }
 */

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import type { ReactNode } from "react";
import "./Layout.css";

interface LayoutProps {
  /** Contenido de la página que se mostrará entre Header y Footer */
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-content">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
