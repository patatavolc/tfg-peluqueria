import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import Section from "../../components/Section/Section.tsx";
import Filter from "../../components/Filter/Filter.tsx";
import ServiceHorizontalCard from "../../components/ServiceHorizontalCard/ServiceHorizontalCard.tsx";
import "./Services.css";
import { servicesForSection } from "../../data/servicesForSection.ts";
import { routes } from "../../data/routes.ts";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const navigate = useNavigate();

  // Obtener categorías únicas de los servicios
  const categories = [
    "Todos",
    ...Array.from(new Set(servicesForSection.map((s) => s.type))),
  ];

  // Filtrar servicios según la categoría seleccionada
  const filteredServices =
    activeFilter === "Todos"
      ? servicesForSection
      : servicesForSection.filter((service) => service.type === activeFilter);

  const handleReserve = (serviceId: number) => {
    // navegación a la página de reservas, pasando el id (como query param)
    navigate(`${routes.reservas}?serviceId=${serviceId}`);
    // Alternativa usando state:
    // navigate(routes.reservas, { state: { serviceId } });
  };

  return (
    <Layout>
      <div className="services__content">
        <Section centered>
          <Filter
            title="Explora por Categoría"
            filters={categories}
            onFilterChange={setActiveFilter}
          />

          <div className="services__results">
            <p className="services__count">
              {filteredServices.length} servicio
              {filteredServices.length !== 1 ? "s" : ""} encontrado
              {filteredServices.length !== 1 ? "s" : ""}
            </p>

            <div className="services__list">
              {filteredServices.map((service) => (
                <ServiceHorizontalCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  image={service.image}
                  onReserve={() => handleReserve(service.id)}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
