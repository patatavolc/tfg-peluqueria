import "./About.css";
import Header from "../../components/Header/Header.tsx";

export default function About() {
  return (
    <div className="about__content">
      <Header />
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
              "La belleza comienza en el momento en el que decides ser tú misma"
            </h2>
            <p>Coco Chanel</p>
          </div>
          <div className="cita__text">
            <p>
              Somos un salón de peluquería en Zatagoza con más de veinte años
              dedicados a cuidar la imagen personal con pasión y detalle. <br />
              Nuestro equipo combina experiencia, creatividad y las últimas
              tendencias para ofrecerte una atención única, cercana y de
              calidad. <br />
              Cada visita es una experiencia pensada para tí, porque creemos que{" "}
              <strong>cuando te ves bien, todo fluye mejor.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="caracteristicas">
        
      </section>
    </div>
  );
}
