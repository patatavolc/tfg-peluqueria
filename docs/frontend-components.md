# Documentación del Frontend - TFG Peluquería

## Descripción General del Sistema

El frontend de **Fressas Peluquería** es una aplicación web moderna construida con React 19 y TypeScript, diseñada para proporcionar una experiencia de usuario fluida y profesional. La aplicación presenta información sobre la peluquería, sus servicios, productos y permite a los usuarios ponerse en contacto.

### Stack Tecnológico

| Tecnología           | Versión | Propósito                            |
| -------------------- | ------- | ------------------------------------ |
| **React**            | 19.1.1  | Librería principal para la UI        |
| **TypeScript**       | 5.9.3   | Tipado estático y seguridad de tipos |
| **Vite**             | 7.1.7   | Build tool y dev server              |
| **React Router DOM** | 7.9.5   | Enrutamiento y navegación            |
| **Heroicons React**  | 2.2.0   | Iconos SVG                           |

### Arquitectura del Proyecto

```
frontend/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   ├── data/             # Datos estáticos y configuración
│   ├── assets/           # Imágenes y recursos
│   ├── App.tsx           # Configuración de rutas
│   └── main.tsx          # Punto de entrada
├── public/               # Archivos estáticos
└── package.json          # Dependencias y scripts
```

### Características Principales

- ✅ **Componentes Reutilizables**: Sistema de componentes modulares y bien documentados
- ✅ **Tipado Fuerte**: TypeScript en todos los componentes con interfaces bien definidas
- ✅ **Responsive Design**: Diseño adaptable a diferentes tamaños de pantalla
- ✅ **Navegación SPA**: Navegación fluida sin recargas de página
- ✅ **Arquitectura Escalable**: Separación clara entre componentes, páginas y datos

---

## Estructura de Rutas

La aplicación utiliza React Router para gestionar la navegación entre páginas.

### Configuración de Rutas

Archivo: [routes.ts](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/data/routes.ts)

```typescript
export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  products: "/products",
  contact: "/contact",
};

export const navItems = [
  { path: routes.about, label: "Sobre Nosotros" },
  { path: routes.services, label: "Servicios" },
  { path: routes.products, label: "Productos" },
  { path: routes.contact, label: "Contacto" },
];
```

### Páginas Disponibles

| Ruta        | Componente | Descripción                                      |
| ----------- | ---------- | ------------------------------------------------ |
| `/`         | `Inicio`   | Página principal con hero y servicios destacados |
| `/about`    | `About`    | Información sobre la peluquería y el equipo      |
| `/services` | `Services` | Catálogo completo de servicios                   |
| `/products` | `Products` | Tienda de productos capilares                    |
| `/contact`  | `Contact`  | Formulario de contacto e información             |

---

## Componentes del Sistema

### Componentes de Layout

#### Layout

**Ubicación**: [Layout.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/pages/Layout/Layout.tsx)

Componente de plantilla principal que envuelve todas las páginas. Proporciona estructura consistente con Header, contenido principal y Footer.

**Props**:

```typescript
interface LayoutProps {
  /** Contenido de la página que se mostrará entre Header y Footer */
  children?: ReactNode;
}
```

**Ejemplo de uso**:

```typescript
export default function MiPagina() {
  return (
    <Layout>
      <h1>Contenido de mi página</h1>
      <p>Este contenido estará entre Header y Footer</p>
    </Layout>
  );
}
```

**Características**:

- Header sticky (siempre visible al hacer scroll)
- Área de contenido que crece para llenar el espacio disponible
- Footer siempre en la parte inferior

---

#### Header

**Ubicación**: [Header.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Header/Header.tsx)

Cabecera principal de la aplicación con navegación y acciones.

**Características**:

- Logo clickeable que redirige al home
- Navegación dinámica desde `routes.ts`
- Botón de inicio de sesión
- Sticky en desktop

**Ejemplo de uso**:

```typescript
<Layout>
  <Header />
  <main>{children}</main>
  <Footer />
</Layout>
```

> [!TIP]
> Para añadir o modificar links de navegación, edita el archivo `src/data/routes.ts` en lugar de modificar el componente Header directamente.

---

#### Footer

**Ubicación**: [Footer.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Footer/Footer.tsx)

Pie de página con información de contacto, enlaces legales y redes sociales.

**Incluye**:

- Enlaces de navegación (Política de privacidad)
- Dirección física: C. de Jose Maria Beltran
- Teléfono: 976 51 64 47
- Redes sociales: Facebook e Instagram
- Texto de copyright

**Ejemplo de uso**:

```typescript
<Layout>
  <Header />
  <main>{children}</main>
  <Footer />
</Layout>
```

---

### Componentes de Contenido

#### Hero

**Ubicación**: [Hero.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Hero/Hero.tsx)

Componente para secciones hero/banner principales. Muestra título, subtítulo y opcionalmente un botón CTA con imagen de fondo.

**Props**:

```typescript
interface HeroProps {
  /** Título principal del hero (h1) */
  title: string;
  /** Subtítulo descriptivo debajo del título */
  subtitle: string;
  /** Texto del botón CTA (opcional) */
  ctaText?: string;
  /** Función que se ejecuta al hacer click en el CTA (opcional) */
  onCtaClick?: () => void;
  /** URL de imagen de fondo (opcional) */
  backgroundImage?: string;
}
```

**Ejemplos de uso**:

```typescript
// Hero básico sin CTA
<Hero
  title="Bienvenidos"
  subtitle="Descripción de la página"
/>

// Hero con botón de acción
<Hero
  title="Tu Estilo, Nuestra Pasión"
  subtitle="Somos expertos en peluquería"
  ctaText="Reservar Cita"
  onCtaClick={() => console.log("Redirigir a reservas")}
/>

// Hero con imagen de fondo
<Hero
  title="Nuestro Salón"
  subtitle="Un espacio diseñado para ti"
  backgroundImage="/images/salon-hero.jpg"
  ctaText="Ver Galería"
  onCtaClick={handleGallery}
/>
```

---

#### Section

**Ubicación**: [Section.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Section/Section.tsx)

Componente contenedor genérico para secciones de página. Proporciona estructura consistente con título, subtítulo opcional y contenido.

**Props**:

```typescript
interface SectionProps {
  /** Contenido de la sección (puede ser cualquier JSX) */
  children: ReactNode;
  /** Clase CSS adicional para estilos personalizados (opcional) */
  className?: string;
  /** Título de la sección (h2) - opcional */
  title?: string;
  /** Subtítulo descriptivo bajo el título (opcional) */
  subtitle?: string;
  /** Si true, centra el texto del título y subtítulo */
  centered?: boolean;
}
```

**Ejemplos de uso**:

```typescript
// Sección básica con título
<Section title="Nuestros Servicios">
  <p>Contenido de la sección</p>
</Section>

// Sección centrada con título y subtítulo
<Section
  title="Sobre Nosotros"
  subtitle="Conoce nuestra historia"
  centered
>
  <Grid columns={3}>
    <IconCard icon={icon} title="..." description="..." />
  </Grid>
</Section>

// Sección con clase personalizada
<Section className="custom-section" title="Galería">
  <ImageGrid images={photos} />
</Section>
```

---

#### Grid

**Ubicación**: [Grid.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Grid/Grid.tsx)

Componente de layout responsive para mostrar elementos en cuadrícula. Se adapta automáticamente al tamaño de pantalla usando CSS Grid con auto-fit.

**Props**:

```typescript
interface GridProps {
  /** Elementos hijos a mostrar en el grid */
  children: ReactNode;
  /** Número de columnas deseadas (se adapta en móviles) */
  columns?: number;
  /** Espaciado entre elementos (acepta cualquier valor CSS) */
  gap?: string;
  /** Clase CSS adicional (opcional) */
  className?: string;
}
```

**Valores por defecto**:

- `columns`: 3
- `gap`: "1.5rem"

**Ejemplos de uso**:

```typescript
// Grid de 3 columnas (por defecto) con tarjetas de servicios
<Grid>
  <ServiceCard title="Corte" description="..." image="..." />
  <ServiceCard title="Color" description="..." image="..." />
  <ServiceCard title="Tratamiento" description="..." image="..." />
</Grid>

// Grid de 4 columnas con gap personalizado
<Grid columns={4} gap="2rem">
  {items.map(item => <Card key={item.id} {...item} />)}
</Grid>

// Grid con clase personalizada
<Grid columns={2} className="featured-grid">
  <IconCard icon={icon1} title="..." description="..." />
  <IconCard icon={icon2} title="..." description="..." />
</Grid>
```

---

### Componentes de Tarjetas

#### ServiceCard

**Ubicación**: [ServiceCard.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/ServiceCard/ServiceCard.tsx)

Tarjeta para mostrar servicios con imagen, título y descripción.

**Props**:

```typescript
interface ServiceCardProps {
  /** Título del servicio */
  title: string;
  /** Descripción breve del servicio */
  description: string;
  /** URL o ruta de la imagen del servicio */
  image: string;
}
```

**Ejemplos de uso**:

```typescript
// Tarjeta individual de servicio
<ServiceCard
  title="Corte y Peinado"
  description="Cortes modernos y personalizados para cada estilo"
  image="/images/corte.jpg"
/>

// Múltiples tarjetas en un grid
<Grid columns={3}>
  {services.map((service, index) => (
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      image={service.image}
    />
  ))}
</Grid>
```

---

#### ProductCard

**Ubicación**: [ProductCard.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/ProductCard/ProductCard.tsx)

Tarjeta para mostrar productos con imagen, información de precio, stock y botón de añadir al carrito.

**Props**:

```typescript
interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  statement: string;
  stock: number;
  onAddToCart: (id: number) => void;
}
```

**Ejemplo de uso**:

```typescript
<ProductCard
  id={1}
  title="Shampoo Hidratante"
  description="Shampoo profesional para cabello seco"
  price={24.99}
  imageUrl="/images/shampoo.jpg"
  statement="Nuevo"
  stock={15}
  onAddToCart={(id) => console.log(`Producto ${id} añadido`)}
/>
```

**Características**:

- Muestra precio formateado con 2 decimales
- Deshabilita el botón cuando `stock === 0`
- Cambia texto del botón según disponibilidad
- Aplica clases CSS dinámicas según el `statement`

---

#### IconCard

**Ubicación**: [IconCard.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/IconCard/IconCard.tsx)

Tarjeta con icono, título y descripción. Ideal para mostrar características, valores o beneficios.

**Props**:

```typescript
interface IconCardProps {
  /** Elemento React para el icono (normalmente un SVG) */
  icon: ReactNode;
  /** Título de la tarjeta */
  title: string;
  /** Descripción o texto explicativo */
  description: string;
}
```

**Ejemplos de uso**:

```typescript
// Tarjeta con icono SVG inline
<IconCard
  icon={
    <svg width="24" height="24">
      <path d="..." />
    </svg>
  }
  title="Calidad"
  description="Productos y servicios de primera calidad"
/>;

// Usando iconos desde un archivo de datos
import { features } from "./data/features";

<Grid columns={3}>
  {features.map((feature, index) => (
    <IconCard
      key={index}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
    />
  ))}
</Grid>;
```

---

### Componentes de Formulario

#### Button

**Ubicación**: [Button.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/Button/Button.tsx)

Botón reutilizable con múltiples variantes, tamaños y estados.

**Props**:

```typescript
interface ButtonProps {
  /** Texto a mostrar en el botón */
  text: string;
  /** Función a ejecutar al hacer click (opcional) */
  onClick?: () => void;
  /** Estilo del botón */
  variant?: "primary" | "secondary" | "outline";
  /** Tamaño del botón */
  size?: "small" | "medium" | "large";
  /** Si true, deshabilita el botón y reduce opacidad */
  disabled?: boolean;
}
```

**Valores por defecto**:

- `variant`: "primary"
- `size`: "medium"
- `disabled`: false

**Variantes disponibles**:

- `primary`: Fondo morado sólido (estilo principal)
- `secondary`: Borde morado con fondo transparente
- `outline`: Transparente con borde

**Ejemplos de uso**:

```typescript
// Botón primario (por defecto)
<Button text="Reservar Cita" onClick={handleClick} />

// Botón secundario pequeño
<Button
  text="Cancelar"
  variant="secondary"
  size="small"
  onClick={handleCancel}
/>

// Botón outline grande
<Button
  text="Más Información"
  variant="outline"
  size="large"
/>

// Botón deshabilitado
<Button
  text="Guardar"
  onClick={handleSave}
  disabled={!isFormValid}
/>
```

---

#### ContactForm

**Ubicación**: [ContactForm.tsx](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/components/ContactForm/ContactForm.tsx)

Formulario de contacto con campos para nombre, email y asunto.

**Props**:

```typescript
interface ContactFormProps {
  title: string;
}
```

**Ejemplo de uso**:

```typescript
<ContactForm title="Contáctanos" />
```

**Campos incluidos**:

- Nombre (text input)
- Correo electrónico (email input)
- Asunto (text input)

> [!NOTE]
> Este componente actualmente no tiene funcionalidad de envío implementada. Es necesario añadir un handler para procesar el formulario.

---

## Datos y Configuración

### Servicios

**Ubicación**: [services.ts](file:///home/patatavolc/Documentos/personal/tfg-peluqueria/frontend/src/data/services.ts)

Array de servicios ofrecidos por la peluquería.

```typescript
export const services = [
  {
    title: "Corte y Peinado",
    description: "Cortes modernos y personalizados para cada estilo.",
    image: service1Image,
  },
  {
    title: "Coloración",
    description: "Tintes, mechas y técnicas profesionales de color.",
    image: service2Image,
  },
  {
    title: "Tratamientos Capilares",
    description: "Hidratación, alisado y reparación profunda del cabello.",
    image: service3Image,
  },
];
```

**Uso**:

```typescript
import { services } from "./data/services";

<Grid columns={3}>
  {services.map((service, index) => (
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      image={service.image}
    />
  ))}
</Grid>;
```

---

## Guía de Instalación

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: versión 18.x o superior
- **npm**: versión 9.x o superior (incluido con Node.js)

Verifica las versiones instaladas:

```bash
node --version
npm --version
```

### Instalación

1. **Clonar el repositorio**:

```bash
git clone <url-del-repositorio>
cd tfg-peluqueria/frontend
```

2. **Instalar dependencias**:

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`:

- React 19.1.1
- React Router DOM 7.9.5
- Heroicons React 2.2.0
- TypeScript 5.9.3
- Vite 7.1.7
- Y todas las devDependencies necesarias

3. **Verificar la instalación**:

```bash
npm list --depth=0
```

Deberías ver una lista de todas las dependencias instaladas sin errores.

---

### Scripts Disponibles

El proyecto incluye los siguientes scripts npm:

#### Desarrollo

```bash
npm run dev
```

- Inicia el servidor de desarrollo de Vite
- Abre la aplicación en `http://localhost:5173`
- Hot Module Replacement (HMR) habilitado
- Los cambios se reflejan automáticamente en el navegador

#### Build de Producción

```bash
npm run build
```

- Compila TypeScript (`tsc -b`)
- Genera bundle optimizado con Vite
- Salida en el directorio `dist/`
- Código minificado y optimizado para producción

#### Linting

```bash
npm run lint
```

- Ejecuta ESLint en el código
- Verifica errores de sintaxis y estilo
- Configuración en `eslint.config.js`

#### Preview

```bash
npm run preview
```

- Previsualiza el build de producción localmente
- Útil para verificar el bundle antes de desplegar
- Requiere ejecutar `npm run build` primero

---

### Estructura de Archivos Después de la Instalación

```
frontend/
├── node_modules/         # Dependencias instaladas (no versionar)
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # 20 componentes reutilizables
│   ├── data/           # Configuración y datos estáticos
│   ├── pages/          # 4 páginas principales
│   ├── App.tsx         # Configuración de rutas
│   ├── App.css         # Estilos globales
│   └── main.tsx        # Punto de entrada
├── .gitignore          # Archivos ignorados por Git
├── eslint.config.js    # Configuración de ESLint
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── package-lock.json   # Lockfile de dependencias
├── tsconfig.json       # Configuración de TypeScript
├── tsconfig.app.json   # Config TS para la app
├── tsconfig.node.json  # Config TS para Node
└── vite.config.ts      # Configuración de Vite
```

---

### Solución de Problemas Comunes

#### Error: "Cannot find module"

**Solución**:

```bash
rm -rf node_modules package-lock.json
npm install
```

#### Puerto 5173 ya en uso

**Solución**:

```bash
# Opción 1: Matar el proceso en el puerto
lsof -ti:5173 | xargs kill -9

# Opción 2: Usar otro puerto
npm run dev -- --port 3000
```

#### Errores de TypeScript

**Solución**:

```bash
# Limpiar caché de TypeScript
rm -rf node_modules/.vite
npm run dev
```

---

## Patrones de Uso Comunes

### Crear una Nueva Página

1. **Crear el componente de página**:

```typescript
// src/pages/MiPagina/MiPagina.tsx
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";

export default function MiPagina() {
  return (
    <Layout>
      <Hero title="Mi Nueva Página" subtitle="Descripción de la página" />
      <Section title="Contenido">
        <p>Contenido de la página...</p>
      </Section>
    </Layout>
  );
}
```

2. **Añadir la ruta en `routes.ts`**:

```typescript
export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  products: "/products",
  contact: "/contact",
  miPagina: "/mi-pagina", // Nueva ruta
};

export const navItems = [
  { path: routes.about, label: "Sobre Nosotros" },
  { path: routes.services, label: "Servicios" },
  { path: routes.products, label: "Productos" },
  { path: routes.contact, label: "Contacto" },
  { path: routes.miPagina, label: "Mi Página" }, // Nuevo item
];
```

3. **Registrar la ruta en `App.tsx`**:

```typescript
import MiPagina from "./pages/MiPagina/MiPagina";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Inicio />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.services} element={<Services />} />
      <Route path={routes.products} element={<Products />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.miPagina} element={<MiPagina />} /> {/* Nueva ruta */}
    </Routes>
  );
}
```

---

### Crear un Nuevo Componente

1. **Crear la estructura de archivos**:

```
src/components/MiComponente/
├── MiComponente.tsx
└── MiComponente.css
```

2. **Definir el componente con TypeScript**:

```typescript
// MiComponente.tsx
import "./MiComponente.css";

interface MiComponenteProps {
  /** Descripción de la prop */
  titulo: string;
  /** Descripción de la prop opcional */
  descripcion?: string;
}

export default function MiComponente({
  titulo,
  descripcion,
}: MiComponenteProps) {
  return (
    <div className="mi-componente">
      <h3>{titulo}</h3>
      {descripcion && <p>{descripcion}</p>}
    </div>
  );
}
```

3. **Añadir estilos**:

```css
/* MiComponente.css */
.mi-componente {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.mi-componente h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}
```

4. **Usar el componente**:

```typescript
import MiComponente from "../../components/MiComponente/MiComponente";

<MiComponente
  titulo="Título del Componente"
  descripcion="Descripción opcional"
/>;
```

---

### Trabajar con Datos Dinámicos

**Crear archivo de datos**:

```typescript
// src/data/misDatos.ts
export interface MiDato {
  id: number;
  nombre: string;
  descripcion: string;
}

export const misDatos: MiDato[] = [
  {
    id: 1,
    nombre: "Item 1",
    descripcion: "Descripción del item 1",
  },
  {
    id: 2,
    nombre: "Item 2",
    descripcion: "Descripción del item 2",
  },
];
```

**Usar los datos en un componente**:

```typescript
import { misDatos } from "../../data/misDatos";
import Grid from "../../components/Grid/Grid";
import MiComponente from "../../components/MiComponente/MiComponente";

export default function MiPagina() {
  return (
    <Grid columns={3}>
      {misDatos.map((dato) => (
        <MiComponente
          key={dato.id}
          titulo={dato.nombre}
          descripcion={dato.descripcion}
        />
      ))}
    </Grid>
  );
}
```

---

## Mejores Prácticas

### TypeScript

✅ **Siempre define interfaces para las props**:

```typescript
interface MiComponenteProps {
  titulo: string;
  opcional?: boolean;
}
```

✅ **Usa tipos específicos en lugar de `any`**:

```typescript
// ❌ Evitar
const handleClick = (data: any) => { ... }

// ✅ Preferir
const handleClick = (data: MiDato) => { ... }
```

✅ **Documenta las props con JSDoc**:

```typescript
interface ButtonProps {
  /** Texto a mostrar en el botón */
  text: string;
  /** Función a ejecutar al hacer click (opcional) */
  onClick?: () => void;
}
```

---

### Componentes

✅ **Mantén los componentes pequeños y enfocados**:

- Un componente debe hacer una sola cosa bien
- Si un componente crece mucho, considera dividirlo

✅ **Usa valores por defecto para props opcionales**:

```typescript
export default function MiComponente({
  size = "medium",
  variant = "primary",
}: MiComponenteProps) {
  // ...
}
```

✅ **Extrae lógica compleja a funciones auxiliares**:

```typescript
const calcularPrecioTotal = (precio: number, cantidad: number): number => {
  return precio * cantidad;
};

export default function ProductCard({ precio, cantidad }: Props) {
  const total = calcularPrecioTotal(precio, cantidad);
  // ...
}
```

---

### Estilos

✅ **Usa clases BEM para nomenclatura CSS**:

```css
.service-card {
}
.service-card__image {
}
.service-card__title {
}
.service-card--featured {
}
```

✅ **Mantén los estilos en archivos separados**:

- Cada componente tiene su propio archivo CSS
- Facilita el mantenimiento y la reutilización

✅ **Usa variables CSS para valores reutilizables**:

```css
:root {
  --color-primary: #7c3aed;
  --spacing-unit: 1rem;
}

.mi-componente {
  color: var(--color-primary);
  padding: var(--spacing-unit);
}
```

---

### Organización de Archivos

✅ **Agrupa archivos relacionados**:

```
components/
└── MiComponente/
    ├── MiComponente.tsx
    ├── MiComponente.css
    └── MiComponente.test.tsx (si hay tests)
```

✅ **Separa datos de componentes**:

- Datos estáticos en `src/data/`
- Componentes en `src/components/`
- Páginas en `src/pages/`

---

## Recursos Adicionales

### Documentación Oficial

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

### Herramientas de Desarrollo

- **React Developer Tools**: Extensión de navegador para debugging
- **TypeScript ESLint**: Linting para TypeScript
- **Vite DevTools**: Herramientas de desarrollo integradas

---

**Versión**: 1.0.0  
**Última actualización**: 2025-11-21  
**Mantenedor**: Equipo de Desarrollo TFG Peluquería
