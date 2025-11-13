/**
 * IconCard Component
 *
 * Tarjeta con icono, título y descripción. Ideal para mostrar características,
 * valores, beneficios o servicios de forma visual y atractiva.
 * El icono se renderiza dentro de un círculo con fondo.
 *
 * @example
 * // Tarjeta con icono SVG inline
 * <IconCard
 *   icon={
 *     <svg width="24" height="24">
 *       <path d="..." />
 *     </svg>
 *   }
 *   title="Calidad"
 *   description="Productos y servicios de primera calidad"
 * />
 *
 * @example
 * // Usando iconos desde un archivo de datos
 * import { features } from './data/features';
 *
 * <Grid columns={3}>
 *   {features.map((feature, index) => (
 *     <IconCard
 *       key={index}
 *       icon={feature.icon}
 *       title={feature.title}
 *       description={feature.description}
 *     />
 *   ))}
 * </Grid>
 */

import "./IconCard.css";
import type { ReactNode } from "react";

interface IconCardProps {
  /** Elemento React para el icono (normalmente un SVG) */
  icon: ReactNode;
  /** Título de la tarjeta */
  title: string;
  /** Descripción o texto explicativo */
  description: string;
}

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="icon-card">
      <div className="icon-card__icon">{icon}</div>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__description">{description}</p>
    </div>
  );
}
