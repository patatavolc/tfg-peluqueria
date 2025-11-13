/**
 * ServiceHorizontalCard Component
 *
 * Tarjeta horizontal para mostrar servicios con imagen, descripción y precio.
 * Diseñada para listados de servicios con opción de reserva.
 * Si no se proporciona imagen, usa placeholder automático.
 *
 * @example
 * // Card con imagen
 * <ServiceHorizontalCard
 *   title="Corte y Peinado"
 *   description="Corte moderno adaptado a tu estilo"
 *   price="25€"
 *   image="/images/corte.jpg"
 *   onReserve={() => console.log("Reservar")}
 * />
 *
 * @example
 * // Card sin imagen (usa placeholder)
 * <ServiceHorizontalCard
 *   title="Coloración"
 *   description="Tinte profesional"
 *   price="60€"
 *   onReserve={handleReserve}
 * />
 *
 * @example
 * // Múltiples cards en lista
 * {services.map((service) => (
 *   <ServiceHorizontalCard
 *     key={service.id}
 *     title={service.title}
 *     description={service.description}
 *     price={service.price}
 *     image={service.image}
 *     onReserve={() => handleReserve(service.id)}
 *   />
 * ))}
 */

import "./ServiceHorizontalCard.css";
import Button from "../Button/Button.tsx";
import placeholder from "../../assets/placeholder.png";

interface ServiceHorizontalCardProps {
  /** Título del servicio */
  title: string;
  /** Descripción breve del servicio */
  description: string;
  /** Precio del servicio (ej: "25€") */
  price: string;
  /** URL de la imagen (opcional, usa placeholder si no se proporciona) */
  image?: string;
  /** Función que se ejecuta al hacer clic en "Reservar" */
  onReserve?: () => void;
}

export default function ServiceHorizontalCard({
  title,
  description,
  price,
  image,
  onReserve,
}: ServiceHorizontalCardProps) {
  const imgSrc = image && image.trim() ? image : placeholder;

  return (
    <div className="service-horizontal-card">
      <div className="service-horizontal-card__content">
        <h3 className="service-horizontal-card__title">{title}</h3>
        <p className="service-horizontal-card__description">{description}</p>
        <div className="service-horizontal-card__footer">
          <span className="service-horizontal-card__price">{price}</span>
          <Button
            text="Reservar"
            onClick={onReserve}
            variant="primary"
            size="small"
          />
        </div>
      </div>
      <div className="service-horizontal-card__image">
        <img
          src={imgSrc}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
      </div>
    </div>
  );
}
