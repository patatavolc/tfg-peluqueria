import service1Image from "../assets/serviceCardsImages/service1.jpg";
import service2Image from "../assets/serviceCardsImages/service2.jpg";
import service3Image from "../assets/serviceCardsImages/service3.jpg";

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image?: string;
  type:
    | "Corte"
    | "Coloración"
    | "Tratamiento"
    | "Peinados"
    | "Manicura"
    | "Maquillaje";
}

export const servicesForSection: Service[] = [
  // Cortes
  {
    id: 1,
    title: "Corte Clásico",
    description:
      "Corte tradicional adaptado a tu estilo personal. Incluye lavado y secado.",
    price: "25€",
    image: service1Image,
    type: "Corte",
  },
  {
    id: 2,
    title: "Corte Moderno",
    description:
      "Las últimas tendencias en cortes de cabello. Incluye consultoría de estilo.",
    price: "35€",
    image: service2Image,
    type: "Corte",
  },
  {
    id: 3,
    title: "Corte y Barba",
    description: "Corte de cabello completo más arreglo y perfilado de barba.",
    price: "30€",
    type: "Corte",
  },

  // Coloración
  {
    id: 4,
    title: "Coloración Completa",
    description:
      "Cambio de color total con productos profesionales de alta calidad.",
    price: "60€",
    image: service3Image,
    type: "Coloración",
  },
  {
    id: 5,
    title: "Mechas Tradicionales",
    description: "Ilumina tu cabello con mechas tradicionales personalizadas.",
    price: "55€",
    type: "Coloración",
  },
  {
    id: 6,
    title: "Balayage",
    description:
      "Técnica de coloración natural para un efecto degradado y luminoso.",
    price: "80€",
    type: "Coloración",
  },
  {
    id: 7,
    title: "Tinte de Raíces",
    description: "Retoque de raíces para mantener tu color perfecto.",
    price: "40€",
    type: "Coloración",
  },

  // Tratamientos
  {
    id: 8,
    title: "Hidratación Profunda",
    description:
      "Tratamiento intensivo para cabello seco y dañado. Restaura brillo y suavidad.",
    price: "45€",
    type: "Tratamiento",
  },
  {
    id: 9,
    title: "Alisado Brasileño",
    description:
      "Alisa y nutre tu cabello por hasta 4 meses. Resultado natural y duradero.",
    price: "120€",
    type: "Tratamiento",
  },
  {
    id: 10,
    title: "Botox Capilar",
    description:
      "Tratamiento reparador que rellena y rejuvenece la fibra capilar.",
    price: "70€",
    type: "Tratamiento",
  },
  {
    id: 11,
    title: "Keratina",
    description:
      "Tratamiento de keratina para suavizar, alisar y fortalecer el cabello.",
    price: "90€",
    type: "Tratamiento",
  },

  // Peinados
  {
    id: 12,
    title: "Peinado de Novia",
    description:
      "Luce perfecta en tu día especial. Incluye prueba previa y fijación duradera.",
    price: "100€",
    type: "Peinados",
  },
  {
    id: 13,
    title: "Recogido Elegante",
    description:
      "Para eventos y ocasiones especiales. Personalizado según tu vestimenta.",
    price: "50€",
    type: "Peinados",
  },
  {
    id: 14,
    title: "Ondas y Rizos",
    description:
      "Peinado con ondas naturales o rizos definidos para cualquier ocasión.",
    price: "35€",
    type: "Peinados",
  },

  // Manicura
  {
    id: 15,
    title: "Manicura Clásica",
    description: "Cuidado completo de manos y uñas con esmaltado tradicional.",
    price: "20€",
    type: "Manicura",
  },
  {
    id: 16,
    title: "Manicura Semipermanente",
    description:
      "Esmaltado de larga duración hasta 3 semanas. Amplia gama de colores.",
    price: "30€",
    type: "Manicura",
  },

  // Maquillaje
  {
    id: 17,
    title: "Maquillaje de Día",
    description:
      "Maquillaje natural y elegante para el día a día o eventos diurnos.",
    price: "35€",
    type: "Maquillaje",
  },
  {
    id: 18,
    title: "Maquillaje de Noche",
    description:
      "Maquillaje sofisticado y duradero para eventos nocturnos especiales.",
    price: "50€",
    type: "Maquillaje",
  },
];
