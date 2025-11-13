import "./About.css";
import Layout from "../Layout/Layout.tsx";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMembeCard.tsx";
import ImageGrid from "../../components/ImageGrid/ImageGrid.tsx";
import placeholder from "../../assets/placeholder.png";

export default function About() {
  const workers = [
    {
      name: "Mariajo",
      job: "Peluquera",
      image: "",
    },
    {
      name: "Claudia",
      job: "Peluquera y Esteticista",
      image: "",
    },
    {
      name: "Judith",
      job: "Masajista",
      image: "",
    },
  ];

  const gallery = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
  ];

  return (
    <Layout>
      <div className="about__content">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Sobre Nosotros</h1>
            <p className="hero__subtitle">
              Dedicados a realzar tu belleza con pasión y profesionalismo.
            </p>
          </div>
        </section>

        <section className="cita">
          <div className="cita__content">
            <div className="cita__text_style">
              <h2>
                "La belleza comienza en el momento en el que decides ser tú
                misma"
              </h2>
              <p>Coco Chanel</p>
            </div>
            <div className="cita__text">
              <p>
                Somos un salón de peluquería en Zatagoza con más de veinte años
                dedicados a cuidar la imagen personal con pasión y detalle.{" "}
                <br />
                Nuestro equipo combina experiencia, creatividad y las últimas
                tendencias para ofrecerte una atención única, cercana y de
                calidad. <br />
                Cada visita es una experiencia pensada para tí, porque creemos
                que <strong>cuando te ves bien, todo fluye mejor.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="caracteristicas">
          <div className="caracteristicas__content">
            <div className="caracteristicas__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-stars"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>
              <h3>Creatividad</h3>
              <p>
                Innovamos constantemente para ofrecerte las últimas tendencias y
                estilos personalizados.
              </p>
            </div>
            <div className="caracteristicas__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plant-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 9a10 10 0 1 0 20 0" />
                <path d="M12 19a10 10 0 0 1 10 -10" />
                <path d="M2 9a10 10 0 0 1 10 10" />
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
              </svg>
              <h3>Bienestar</h3>
              <p>
                Tu comodidad y satisfacción son nuestra mámima prioridad en cada
                visita.
              </p>
            </div>
            <div className="caracteristicas__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <h3>Calidad</h3>
              <p>
                Utilizamos solo los mejores productos y técnicas para garantizar
                resultados excepcionales.
              </p>
            </div>
          </div>
        </section>

        <section className="team-members-section">
          <p className="team-members__title">Conoce a nuestro equipo</p>
          <div className="team-members__card__container">
            {workers.map((worker, index) => (
              <TeamMemberCard
                key={index}
                name={worker.name}
                job={worker.job}
                image={worker.image}
              />
            ))}
          </div>
        </section>

        <section className="salon-section">
          <div className="salon-section__content">
            <h2>Nuestro Salon</h2>
            <ImageGrid images={gallery} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
