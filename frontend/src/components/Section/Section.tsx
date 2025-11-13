/**
 * Section Component
 *
 * Componente contenedor genérico para secciones de página.
 * Proporciona estructura consistente con título, subtítulo opcional y contenido.
 * Útil para mantener un espaciado y estilo uniforme en todas las secciones.
 *
 * @example
 * // Sección básica con título
 * <Section title="Nuestros Servicios">
 *   <p>Contenido de la sección</p>
 * </Section>
 *
 * @example
 * // Sección centrada con título y subtítulo
 * <Section
 *   title="Sobre Nosotros"
 *   subtitle="Conoce nuestra historia"
 *   centered
 * >
 *   <Grid columns={3}>
 *     <IconCard icon={icon} title="..." description="..." />
 *   </Grid>
 * </Section>
 *
 * @example
 * // Sección con clase personalizada
 * <Section className="custom-section" title="Galería">
 *   <ImageGrid images={photos} />
 * </Section>
 */

import "./Section.css";
import type { ReactNode } from "react";

interface SectionProps {
  /** Contenido de la sección (puede ser cualquier JSX) */
  children: ReactNode;
  /** Clase CSS adicional para estilos personalizados (opcional) */
  className?: string;
  /** Título de la sección (h2) - opcional */
  title?: string;
  /** Subtítulo descriptivo bajo el título (opcional) */
  subtitle?: string;
  /** Si true, centra el texto del título y subtítulo */
  centered?: boolean;
}

export default function Section({
  children,
  className = "",
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  return (
    <section
      className={`section ${className} ${centered ? "section--centered" : ""}`}
    >
      <div className="section__container">
        {title && <h2 className="section__title">{title}</h2>}
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
}
