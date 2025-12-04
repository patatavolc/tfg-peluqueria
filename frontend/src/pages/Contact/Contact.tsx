import Layout from "../Layout/Layout.tsx";
import "./Contact.css";
import TitleAndSubtitle from "../../components/TitleAndSubtitle/TitleAndSubtitle.tsx";
import ContactInfo from "../../components/ContactInfo/ContactInfo.tsx";
import MapEmbed from "../../components/MapEmbed/MapEmbed.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
export default function Contact() {
  return (
    <Layout>
      <div className="title">
        <TitleAndSubtitle
          title="Contactanos"
          subtitle="Nos encantaria saber de ti. Ponte en contacto con nosotros utilizndo la informacion a continuacion o rellenando el formulario de contacto"
          left
        />
      </div>

      <ContactInfo
        address="C. de Jose Maria Beltran, 50018 Zaragoza"
        tlfNumber="876 51 56 57"
        email="contacto@fressas.com"
      />
      <MapEmbed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5755.564751189001!2d-0.8899703013333072!3d41.6771938538499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914a065e9c2a1%3A0xa7aaff5ff5fb86fa!2sFressas!5e1!3m2!1ses!2ses!4v1764847054562!5m2!1ses!2ses"
        title="Fressas Peluqueria"
      />
      <ContactForm title="Envianos un mensaje" />
    </Layout>
  );
}
