import "./ServiceCardSection.css";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function ServiceCardSection() {
  const services = [
    {
      title: "Corte y Peinado",
      description: "Cortes modernos y personalizados para cada estilo.",
      image: "/images/corte.jpg",
    },
    {
      title: "Coloración",
      description: "Tintes, mechas y técnicas profesionales de color.",
      image: "/images/coloracion.jpg",
    },
    {
      title: "Tratamientos Capilares",
      description: "Hidratación, alisado y reparación profunda del cabello.",
      image: "/images/tratamiento.jpg",
    },
  ];

  return (
    <section className="service-section" id="services">
      <h2 className="service-section__title">Nuestros Servicios</h2>
      <div className="service-section__grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
