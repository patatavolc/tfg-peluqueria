import "./ContactForm.css";
import Button from "../Button/Button.tsx";
interface ContactFormProps {
  title : string;
}

export default function ContactForm({title}:ContactFormProps) {
  return (
    <form>
      <h2>{title}</h2>
      <div className="contact-form__labels">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Tu nombre" required/>
      </div>
      <div className="contact-form__labels">
        <label htmlFor="email">Correo electronico</label>
        <input type="email" name="email" id="email" placeholder="tu@email.com" required />
      </div>
      <div className="contact-form__labels">
        <label htmlFor="asunto">Asunto</label>
        <input type="text" name="asunto" id="asunto" placeholder="Asunto del mensaje" required/>
      </div>
      <div className="contact-form__labels message">
        <label htmlFor="message">Mensaje</label>
        <textarea name="massage" id="nsg" placeholder="Escribe tu mensaje aqui..." required></textarea>
      </div>
      <Button text="Enviar" variant="primary" />
    </form>
  )
};

