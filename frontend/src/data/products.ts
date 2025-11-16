export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number; // Cantidad disponible
  featured?: boolean;
}

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

export const getStockStatus = (stock: number): StockStatus => {
  if (stock === 0) return "out-of-stock";
  if (stock <= 5) return "low-stock";
  return "in-stock";
};

export const getStockMessage = (stock: number): string => {
  if (stock === 0) return "Sin stock";
  if (stock <= 5) return `Bajo stock (${stock} unidades)`;
  return "En stock";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Shampoo Hidratante Professional",
    brand: "Kerastase",
    category: "Shampoo",
    price: 28.99,
    description:
      "Shampoo ultra hidratante para cabello seco y dañado. Formulado con aceites nutritivos.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
    stock: 15,
    featured: true,
  },
  {
    id: 2,
    name: "Acondicionador Reparador",
    brand: "Olaplex",
    category: "Acondicionador",
    price: 32.5,
    description:
      "Acondicionador intensivo que repara el cabello desde la raíz hasta las puntas.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
    stock: 3,
    featured: true,
  },
  {
    id: 3,
    name: "Mascarilla Nutritiva Intense",
    brand: "Redken",
    category: "Mascarilla",
    price: 24.99,
    description:
      "Tratamiento profundo que nutre y fortalece el cabello debilitado.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
    stock: 8,
  },
  {
    id: 4,
    name: "Serum Anti-Frizz",
    brand: "Moroccanoil",
    category: "Serum",
    price: 35.0,
    description:
      "Serum ligero con aceite de argán que controla el frizz y aporta brillo.",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400",
    stock: 2,
    featured: true,
  },
  {
    id: 5,
    name: "Spray Protector Térmico",
    brand: "GHD",
    category: "Protector",
    price: 18.99,
    description:
      "Protección térmica hasta 230°C. Ideal para usar antes del secador o plancha.",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400",
    stock: 12,
  },
  {
    id: 6,
    name: "Cera Modeladora Extra Fuerte",
    brand: "American Crew",
    category: "Styling",
    price: 16.5,
    description:
      "Cera de fijación extra fuerte con acabado mate. Perfecta para estilos definidos.",
    image: "https://images.unsplash.com/photo-1503735964428-e29f1b870a40?w=400",
    stock: 0,
  },
  {
    id: 7,
    name: "Laca Fijación Flexible",
    brand: "L'Oréal Professional",
    category: "Laca",
    price: 14.99,
    description: "Fijación duradera con movimiento natural. No deja residuos.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400",
    stock: 0,
  },
  {
    id: 8,
    name: "Champú Anticaspa",
    brand: "Head & Shoulders",
    category: "Shampoo",
    price: 12.99,
    description:
      "Elimina la caspa desde la primera aplicación. Cuero cabelludo sano.",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400",
    stock: 20,
  },
  {
    id: 9,
    name: "Tinte Permanente Castaño",
    brand: "Wella",
    category: "Color",
    price: 22.0,
    description: "Coloración permanente profesional. Cobertura total de canas.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
    stock: 5,
  },
  {
    id: 10,
    name: "Aceite Capilar Argán",
    brand: "Moroccanoil",
    category: "Aceite",
    price: 42.0,
    description:
      "Aceite puro de argán orgánico. Nutre, hidrata y aporta brillo natural.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400",
    stock: 1,
    featured: true,
  },
  {
    id: 11,
    name: "Espuma Volumen Extra",
    brand: "Tigi",
    category: "Styling",
    price: 19.5,
    description:
      "Espuma voluminizadora que da cuerpo sin apelmazar. Larga duración.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400",
    stock: 4,
  },
  {
    id: 12,
    name: "Mascarilla Color Protect",
    brand: "Kerastase",
    category: "Mascarilla",
    price: 38.0,
    description:
      "Protege el color y aporta brillo intenso. Para cabellos teñidos.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400",
    stock: 10,
  },
  {
    id: 13,
    name: "Gel Fijador Wet Look",
    brand: "Schwarzkopf",
    category: "Styling",
    price: 11.99,
    description:
      "Gel de fijación extra fuerte. Efecto mojado de larga duración.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
    stock: 0,
  },
  {
    id: 14,
    name: "Tratamiento Keratin Repair",
    brand: "Redken",
    category: "Mascarilla",
    price: 29.99,
    description: "Tratamiento intensivo con keratina para cabello muy dañado.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
    stock: 3,
  },
  {
    id: 15,
    name: "Spray Texturizador Marina",
    brand: "Tigi",
    category: "Styling",
    price: 17.5,
    description: "Crea ondas naturales con textura de playa. Acabado mate.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400",
    stock: 2,
  },
];

export const categories = [
  "Todos",
  "Shampoo",
  "Acondicionador",
  "Mascarilla",
  "Serum",
  "Protector",
  "Styling",
  "Laca",
  "Color",
  "Aceite",
];

export const brands = [
  "Todas",
  "Kerastase",
  "Olaplex",
  "Redken",
  "Moroccanoil",
  "GHD",
  "American Crew",
  "L'Oréal Professional",
  "Head & Shoulders",
  "Wella",
  "Tigi",
];
