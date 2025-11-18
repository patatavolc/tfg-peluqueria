/**
 * TitleAndSubtitle Component
 *
 * Componente para mostrar un título y un subtítulo con diferentes opciones de alineación.
 * Permite elegir la alineación: centrada, izquierda o derecha mediante props booleanas.
 *
 * Prioridad de alineación:
 * 1. centered
 * 2. left
 * 3. right
 * Si no se pasa ninguna prop, se alinea a la izquierda por defecto.
 *
 * @example
 * // Alineado al centro
 * <TitleAndSubtitle title="Bienvenido" subtitle="Subtítulo aquí" centered />
 *
 * @example
 * // Alineado a la derecha
 * <TitleAndSubtitle title="Título" subtitle="Texto descriptivo" right />
 *
 * @example
 * // Alineado a la izquierda (explícito)
 * <TitleAndSubtitle title="Servicios" subtitle="Lo que ofrecemos" left />
 *
 * @example
 * // Alineado a la izquierda (por defecto, sin props)
 * <TitleAndSubtitle title="Productos" subtitle="Catálogo disponible" />
 *
 * Props:
 * - title (string): Texto principal (requerido).
 * - subtitle (string): Texto secundario (requerido).
 * - centered (boolean): Centra ambos textos.
 * - left (boolean): Alinea a la izquierda.
 * - right (boolean): Alinea a la derecha.
 *
 * Notas:
 * - Si se pasan varias props (e.g. centered y right), se aplicará solo la de mayor prioridad.
 * - Las clases de alineación se gestionan por CSS (ver TitleAndSubtitle.css).
 */
import "./TitleAndSubtitle.css";

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  left?: boolean;
  right?: boolean;
}

export default function TitleAndSubtitle({
  title,
  subtitle,
  centered = false,
  left = false,
  right = false,
}: TitleAndSubtitleProps) {
  // Prioridad: centered > left > right. Si ninguno: left por defecto.
  let alignClass = "titleAndSubtitle--left";
  if (centered) alignClass = "titleAndSubtitle--center";
  else if (left) alignClass = "titleAndSubtitle--left";
  else if (right) alignClass = "titleAndSubtitle--right";

  return (
    <div className={`titleAndSubtitle-content ${alignClass}`}>
      <h1 className="titleAndSubtitle-title">{title}</h1>
      <p className="titleAndSubtitle-subtitle">{subtitle}</p>
    </div>
  );
}
