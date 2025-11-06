import "./HeroSection.css"
import Button from "../Button/Button.tsx"

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Tu Estilo, Nuestra Pasion</h1>
        <p className="hero__subtitle">
          Bienvenidos a Fressas Peluqueria. Somos un equipo de estilistas apasionados por el cabello y dedicados a que te veas y te sientas lo mejor posible
        </p>
        <Button text="Reservar Cita" />
      </div>
    </section>
  )
}