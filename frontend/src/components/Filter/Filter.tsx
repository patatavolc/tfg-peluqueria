/**
 * Filter Component
 *
 * Componente de filtros interactivo con tabs/botones.
 * Permite filtrar contenido (servicios, productos, etc.) mediante categorías.
 * Mantiene el estado del filtro activo y notifica al componente padre.
 *
 * @example
 * // Filtro básico de servicios
 * <Filter
 *   title="Nuestros Servicios"
 *   filters={["Todos", "Corte", "Coloración", "Tratamiento"]}
 *   onFilterChange={(filter) => console.log("Filtro seleccionado:", filter)}
 * />
 *
 * @example
 * // Filtro de productos con valor inicial
 * <Filter
 *   title="Catálogo de Productos"
 *   filters={["Todos", "Shampoo", "Acondicionador", "Tratamiento", "Styling"]}
 *   defaultFilter="Shampoo"
 *   onFilterChange={handleFilterChange}
 * />
 *
 * @example
 * // Uso completo con filtrado de servicios
 * function ServicesPage() {
 *   const [activeFilter, setActiveFilter] = useState("Todos");
 *   const allServices = [...]; // tus servicios
 *
 *   const filteredServices = activeFilter === "Todos"
 *     ? allServices
 *     : allServices.filter(service => service.category === activeFilter);
 *
 *   return (
 *     <>
 *       <Filter
 *         title="Explora Nuestros Servicios"
 *         filters={["Todos", "Corte", "Coloración", "Tratamiento", "Peinados"]}
 *         onFilterChange={setActiveFilter}
 *       />
 *       <Grid>
 *         {filteredServices.map(service => (
 *           <ServiceCard key={service.id} {...service} />
 *         ))}
 *       </Grid>
 *     </>
 *   );
 * }
 */

import { useState } from "react";
import "./Filter.css";

interface FilterProps {
  /** Título que se muestra encima de los filtros */
  title: string;
  /** Lista de opciones de filtro (ej: ["Todos", "Corte", "Coloración"]) */
  filters: string[];
  /** Función callback que se ejecuta cuando cambia el filtro seleccionado */
  onFilterChange: (filter: string) => void;
  /** Filtro seleccionado por defecto (opcional, por defecto usa el primero) */
  defaultFilter?: string;
}

export default function Filter({
  title,
  filters,
  onFilterChange,
  defaultFilter,
}: FilterProps) {
  // Usar el primer filtro de la lista o el defaultFilter como valor inicial
  const [activeFilter, setActiveFilter] = useState(
    defaultFilter || filters[0] || "Todos"
  );

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter); // Notificar al componente padre
  };

  return (
    <div className="filter-section">
      <h2 className="filter-section__title">{title}</h2>
      <nav className="filter-section__nav">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
