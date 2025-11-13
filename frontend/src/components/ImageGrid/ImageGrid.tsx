/**
 * ImageGrid Component
 *
 * Grid especializado para mostrar galería de imágenes con layout personalizado.
 * Muestra hasta 5 imágenes en una disposición estilizada donde la primera imagen
 * es más grande y ocupa más espacio que las demás.
 *
 * Layout:
 * - Imagen 1: Grande (2x4 grid cells) a la izquierda
 * - Imágenes 2-5: Pequeñas (2x2 grid cells cada una) en grid 2x2 a la derecha
 *
 * @example
 * // Galería básica
 * <ImageGrid images={[
 *   '/gallery/foto1.jpg',
 *   '/gallery/foto2.jpg',
 *   '/gallery/foto3.jpg'
 * ]} />
 *
 * @example
 * // En una sección
 * <Section title="Nuestro Salón" centered>
 *   <ImageGrid images={galleryPhotos} />
 * </Section>
 */

import "./ImageGrid.css";
import ImageToPlace from "../ImageToPlace/ImageToPlace.tsx";

interface ImageGridProps {
  /** Array de URLs de imágenes (máximo 5, el resto se ignora) */
  images: string[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  const max = 5;
  const items = images.slice(0, max);

  return (
    <div className="parent">
      {items.map((src, i) => (
        <div key={i} className={`div${i + 1}`}>
          <ImageToPlace src={src} alt={`Imagen ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}
