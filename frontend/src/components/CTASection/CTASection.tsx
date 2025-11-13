/**
 * CTASection Component (Call To Action)
 *
 * Sección destacada con fondo gradiente para llamadas a la acción.
 * Incluye título, descripción y botón. Ideal para conversiones:
 * reservas, contacto, registro, etc.
 *
 * @example
 * // CTA para reservas
 * <CTASection
 *   title="¿Listo para tu Transformación?"
 *   description="Reserva tu cita hoy y descubre tu mejor versión"
 *   buttonText="Reservar Ahora"
 *   onButtonClick={() => navigate('/reservas')}
 * />
 *
 * @example
 * // CTA para newsletter
 * <CTASection
 *   title="Únete a Nuestra Comunidad"
 *   description="Recibe tips de belleza y ofertas exclusivas"
 *   buttonText="Suscribirme"
 *   onButtonClick={handleSubscribe}
 * />
 *
 * @example
 * // CTA sin función (solo navegación con Link)
 * <CTASection
 *   title="Descubre Nuestros Servicios"
 *   description="Tenemos el tratamiento perfecto para ti"
 *   buttonText="Ver Servicios"
 * />
 */

import "./CTASection.css";
import Button from "../Button/Button.tsx";

interface CTASectionProps {
  /** Título principal del CTA (texto blanco sobre gradiente) */
  title: string;
  /** Descripción o texto persuasivo bajo el título */
  description: string;
  /** Texto del botón de acción */
  buttonText: string;
  /** Función a ejecutar al hacer click en el botón (opcional) */
  onButtonClick?: () => void;
}

export default function CTASection({
  title,
  description,
  buttonText,
  onButtonClick,
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-section__content">
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__description">{description}</p>
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </section>
  );
}
