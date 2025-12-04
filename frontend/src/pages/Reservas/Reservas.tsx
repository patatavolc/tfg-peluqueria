import Layout from "../Layout/Layout.tsx";
import "./reservas.css";
import Title from "../../components/Title/Title.tsx";
import SelectGenre from "../../components/SelectGenre/SelectGenre.tsx";

export default function Reservas() {
  return (
    <Layout>
      <Title text="Reserva tu cita en Fressas" />
      <SelectGenre />
    </Layout>
  );
}
