/**
 * Quote Component
 *
 * Componente para mostrar citas inspiradoras con autor y descripción opcional.
 * Útil para páginas "Sobre Nosotros", testimonios o destacar frases importantes.
 * Incluye estilo visual distintivo con gradiente de fondo.
 *
 * @example
 * // Cita simple con autor
 * <Quote
 *   quote="La belleza comienza cuando decides ser tú misma"
 *   author="Coco Chanel"
 * />
 *
 * @example
 * // Cita con descripción adicional
 * <Quote
 *   quote="El cabello es la mejor forma de expresión personal"
 *   author="Anónimo"
 *   description="En nuestro salón creemos que cada persona es única y merece
 *                un estilo que refleje su personalidad. Por eso trabajamos
 *                contigo para crear el look perfecto."
 * />
 */

import "./Quote.css";

interface QuoteProps {
  /** Texto de la cita (se añaden comillas automáticamente) */
  quote: string;
  /** Autor de la cita */
  author: string;
  /** Texto descriptivo adicional bajo la cita (opcional) */
  description?: string;
}

export default function Quote({ quote, author, description }: QuoteProps) {
  return (
    <section className="quote">
      <div className="quote__content">
        <div className="quote__text-style">
          <h2 className="quote__quote">"{quote}"</h2>
          <p className="quote__author">{author}</p>
        </div>
        {description && (
          <div className="quote__description">
            <p>{description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
