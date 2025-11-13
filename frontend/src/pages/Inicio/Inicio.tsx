import Header from "../../components/Header/Header.tsx";
import Button from "../../components/Button/Button.tsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import "./Inicio.css";

import service1Image from "../../assets/serviceCardsImages/service1.jpg";
import service2Image from "../../assets/serviceCardsImages/service2.jpg";
import service3Image from "../../assets/serviceCardsImages/service3.jpg";

export default function Inicio() {
  const services = [
    {
      title: "Corte y Peinado",
      description: "Cortes modernos y personalizados para cada estilo.",
      image: service1Image,
    },
    {
      title: "Coloración",
      description: "Tintes, mechas y técnicas profesionales de color.",
      image: service2Image,
    },
    {
      title: "Tratamientos Capilares",
      description: "Hidratación, alisado y reparación profunda del cabello.",
      image: service3Image,
    },
  ];
  return (
    <div className="home__content">
      <Header />

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Tu Estilo, Nuestra Pasión</h1>
          <p className="hero__subtitle">
            Bienvenidos a Fressas Peluquería. Somos un equipo de estilistas
            apasionados por el cabello y dedicados a que te veas y te sientas lo
            mejor posible
          </p>

          <Button text="Reservar Cita" />
        </div>
      </section>

      <section className="service-section">
        <h2 className="service-section__title">Nuestros Servicios</h2>
        <div className="service-section__card__container">
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

      <Footer />
    </div>
  );
}
