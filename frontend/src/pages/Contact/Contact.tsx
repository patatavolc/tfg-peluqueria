import Layout from "../Layout/Layout.tsx";
import "./Contact.css";
import TitleAndSubtitle from "../../components/TitleAndSubtitle/TitleAndSubtitle.tsx";

export default function Contact() {
  return (
    <Layout>
      <TitleAndSubtitle
        title="Contactanos"
        subtitle="Nos encantaria saber de ti. Ponte en contacto con nosotros utilizndo la informacion a continuacion o rellenando el formulario de contacto"
        left
      />
    </Layout>
  );
}
