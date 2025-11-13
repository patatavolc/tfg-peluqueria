import "./Hero.css";
import Button from "../Button/Button.tsx";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

/**
 * Hero Component
 *
 * Componente reutilizable para secciones hero/banner principales de las páginas.
 * Muestra un título destacado, subtítulo descriptivo y opcionalmente un botón CTA.
 *
 * @example
 * // Hero básico sin CTA
 * <Hero
 *   title="Bienvenidos"
 *   subtitle="Descripción de la página"
 * />
 *
 * @example
 * // Hero con botón de acción
 * <Hero
 *   title="Tu Estilo, Nuestra Pasión"
 *   subtitle="Somos expertos en peluquería"
 *   ctaText="Reservar Cita"
 *   onCtaClick={() => console.log("Redirigir a reservas")}
 * />
 */

import "./Hero.css";
import Button from "../Button/Button.tsx";

interface HeroProps {
  /** Título principal del hero (h1) */
  title: string;
  /** Subtítulo descriptivo debajo del título */
  subtitle: string;
  /** Texto del botón CTA (opcional) */
  ctaText?: string;
  /** Función que se ejecuta al hacer click en el CTA (opcional) */
  onCtaClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {ctaText && <Button text={ctaText} onClick={onCtaClick} />}
      </div>
    </section>
  );
}
