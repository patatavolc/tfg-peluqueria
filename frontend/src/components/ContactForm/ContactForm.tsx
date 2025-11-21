import "./ContactForm.css";

interface ContactFormProps {
  title : string;
}

export default function ContactForm({title}:ContactFormProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="contact-form__labels">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Tu nombre" />
      </div>
      <div className="contact-form__labels">
        <label htmlFor="email">Correo electronico</label>
        <input type="email" name="email" id="email" placeholder="tu@email.com" />
      </div>
      <div className="contact-form__labels">
        <label htmlFor="asunto">Asunto</label>
        <input type="text" name="asunto" id="asunto" placeholder="Asunto del mensaje" />
      </div>
    </div>
  )
};

