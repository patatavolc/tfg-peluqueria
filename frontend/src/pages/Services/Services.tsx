import { useState } from "react";
import Layout from "../Layout/Layout.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import Section from "../../components/Section/Section.tsx";
import Filter from "../../components/Filter/Filter.tsx";
import ServiceHorizontalCard from "../../components/ServiceHorizontalCard/ServiceHorizontalCard.tsx";
import "./Services.css";
import { servicesForSection } from "../../data/servicesForSection.ts";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("Todos");

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
    console.log(`Reservando servicio ID: ${serviceId}`);
    // Aquí iría la lógica de reserva (modal, navegación, etc.)
  };

  return (
    <Layout>
      <div className="services__content">
        <Hero
          title="Nuestros Servicios"
          subtitle="Descubre la amplia gama de servicios profesionales que ofrecemos para realzar tu belleza"
        />

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
