import Layout from "../Layout/Layout.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import Section from "../../components/Section/Section.tsx";
import Grid from "../../components/Grid/Grid.tsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.tsx";
import "./Inicio.css";
import { services } from "../../data/services.ts";
import homeBackground from "../../assets/home.png";

export default function Inicio() {
  const handleReservation = () => {
    console.log("Redirigiendo a reservas...");
  };

  return (
    <Layout>
      <div className="home__content">
        <Hero
          title="Tu Estilo, Nuestra Pasión"
          subtitle="Bienvenidos a Fressas Peluquería. Somos un equipo de estilistas apasionados por el cabello y dedicados a que te veas y te sientas lo mejor posible"
          backgroundImage={homeBackground}
          ctaText="Reservar Cita"
          onCtaClick={handleReservation}
        />

        <Section title="Nuestros Servicios" centered>
          <Grid columns={3}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </Grid>
        </Section>
      </div>
    </Layout>
  );
}
