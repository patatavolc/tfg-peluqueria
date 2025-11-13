/**
 * Hero Component
 *
 * Componente reutilizable para secciones hero/banner principales de las páginas.
 * Muestra un título destacado, subtítulo descriptivo y opcionalmente un botón CTA.
 * Soporta imagen de fondo personalizada.
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
 *
 * @example
 * // Hero con imagen de fondo
 * <Hero
 *   title="Nuestro Salón"
 *   subtitle="Un espacio diseñado para ti"
 *   backgroundImage="/images/salon-hero.jpg"
 *   ctaText="Ver Galería"
 *   onCtaClick={handleGallery}
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
  /** URL de imagen de fondo (opcional, usa color sólido si no se proporciona) */
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundImage,
}: HeroProps) {
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={`hero ${backgroundImage ? "hero--with-bg" : ""}`}
      style={style}
    >
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {ctaText && <Button text={ctaText} onClick={onCtaClick} />}
      </div>
    </section>
  );
}
