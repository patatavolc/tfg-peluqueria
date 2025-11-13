import "./About.css";
import Layout from "../Layout/Layout.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import Quote from "../../components/Quote/Quote.tsx";
import Section from "../../components/Section/Section.tsx";
import Grid from "../../components/Grid/Grid.tsx";
import IconCard from "../../components/IconCard/IconCard.tsx";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMembeCard.tsx";
import ImageGrid from "../../components/ImageGrid/ImageGrid.tsx";
import CTASection from "../../components/CTASection/CTASection.tsx";
import placeholder from "../../assets/placeholder.png";
import { teamMembers } from "../../data/team.ts";
import { features } from "../../data/features.tsx";

export default function About() {
  const gallery = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
  ];

  const handleReservation = () => {
    console.log("Redirigiendo a reservas...");
  };

  return (
    <Layout>
      <div className="about__content">
        <Hero
          title="Sobre Nosotros"
          subtitle="Dedicados a realzar tu belleza con pasión y profesionalismo."
        />

        <Quote
          quote="La belleza comienza en el momento en el que decides ser tú misma"
          author="Coco Chanel"
          description="Somos un salón de peluquería en Zaragoza con más de veinte años dedicados a cuidar la imagen personal con pasión y detalle. Nuestro equipo combina experiencia, creatividad y las últimas tendencias para ofrecerte una atención única, cercana y de calidad. Cada visita es una experiencia pensada para ti, porque creemos que cuando te ves bien, todo fluye mejor."
        />

        <Section title="Nuestros Valores" centered>
          <Grid columns={3}>
            {features.map((feature, index) => (
              <IconCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Grid>
        </Section>

        <Section title="Conoce a nuestro equipo" centered>
          <Grid columns={3}>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                job={member.job}
                image={member.image}
              />
            ))}
          </Grid>
        </Section>

        <Section title="Nuestro Salón" centered>
          <ImageGrid images={gallery} />
        </Section>

        <CTASection
          title="¿Listo/a para tu Transformación?"
          description="Permítenos ser parte de tu historia de belleza. Reserva tu cita hoy y vive la experiencia Fressas."
          buttonText="Reserva tu Experiencia"
          onButtonClick={handleReservation}
        />
      </div>
    </Layout>
  );
}
