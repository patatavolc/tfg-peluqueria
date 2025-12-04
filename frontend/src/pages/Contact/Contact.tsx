import Layout from "../Layout/Layout.tsx";
import "./Contact.css";
import TitleAndSubtitle from "../../components/TitleAndSubtitle/TitleAndSubtitle.tsx";
import ContactInfo from "../../components/ContactInfo/ContactInfo.tsx";
import MapEmbed from "../../components/MapEmbed/MapEmbed.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
export default function Contact() {
  return (
    <Layout>
      <TitleAndSubtitle
        title="Contactanos"
        subtitle="Nos encantaria saber de ti. Ponte en contacto con nosotros utilizndo la informacion a continuacion o rellenando el formulario de contacto"
        left
      />

      <ContactInfo
        address="C. de Jose Maria Beltran, 50018 Zaragoza"
        tlfNumber="876 51 56 57"
        email="contacto@fressas.com"
      />
      <MapEmbed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4297.692127045282!2d-0.8862912146737787!3d41.677717601440406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59149fcb56d5a5%3A0x57068ad103084f62!2sEn%20tu%20fiesta%20me%20qued%C3%A9!5e1!3m2!1ses!2ses!4v1763637142766!5m2!1ses!2ses"
        title="En tu fiesta me quede "
      />
      <ContactForm title="Envianos un mensaje"/>
    </Layout>
  );
}
