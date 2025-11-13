/**
 * ServiceCard Component
 *
 * Tarjeta para mostrar servicios o productos con imagen, título y descripción.
 * Diseñada para usarse dentro de un Grid para mostrar múltiples servicios.
 *
 * @example
 * // Tarjeta individual de servicio
 * <ServiceCard
 *   title="Corte y Peinado"
 *   description="Cortes modernos y personalizados para cada estilo"
 *   image="/images/corte.jpg"
 * />
 *
 * @example
 * // Múltiples tarjetas en un grid
 * <Grid columns={3}>
 *   {services.map((service, index) => (
 *     <ServiceCard
 *       key={index}
 *       title={service.title}
 *       description={service.description}
 *       image={service.image}
 *     />
 *   ))}
 * </Grid>
 */

import "./ServiceCard.css";

interface ServiceCardProps {
  /** Título del servicio */
  title: string;
  /** Descripción breve del servicio */
  description: string;
  /** URL o ruta de la imagen del servicio */
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card__image" />
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>
    </div>
  );
}
