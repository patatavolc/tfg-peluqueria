/**
 * Grid Component
 *
 * Componente de layout responsive para mostrar elementos en una cuadrícula.
 * Se adapta automáticamente al tamaño de pantalla usando CSS Grid con auto-fit.
 *
 * @example
 * // Grid de 3 columnas (por defecto) con tarjetas de servicios
 * <Grid>
 *   <ServiceCard title="Corte" description="..." image="..." />
 *   <ServiceCard title="Color" description="..." image="..." />
 *   <ServiceCard title="Tratamiento" description="..." image="..." />
 * </Grid>
 *
 * @example
 * // Grid de 4 columnas con gap personalizado
 * <Grid columns={4} gap="2rem">
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Grid>
 *
 * @example
 * // Grid con clase personalizada
 * <Grid columns={2} className="featured-grid">
 *   <IconCard icon={icon1} title="..." description="..." />
 *   <IconCard icon={icon2} title="..." description="..." />
 * </Grid>
 */

import "./Grid.css";
import type { ReactNode } from "react";

interface GridProps {
  /** Elementos hijos a mostrar en el grid */
  children: ReactNode;
  /** Número de columnas deseadas (el grid se adapta automáticamente en móviles) */
  columns?: number;
  /** Espaciado entre elementos (acepta cualquier valor CSS válido) */
  gap?: string;
  /** Clase CSS adicional (opcional) */
  className?: string;
}

export default function Grid({
  children,
  columns = 3,
  gap = "1.5rem",
  className = "",
}: GridProps) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gap: gap,
        gridTemplateColumns: `repeat(auto-fit, minmax(${
          columns === 3 ? "250px" : "200px"
        }, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
