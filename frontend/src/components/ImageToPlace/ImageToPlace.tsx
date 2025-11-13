/**
 * ImageToPlace Component
 *
 * Componente wrapper para imágenes con manejo de errores y placeholder automático.
 * Asegura que siempre se muestre una imagen, incluso si la URL falla o está vacía.
 *
 * Características:
 * - Usa placeholder si src está vacío o es undefined
 * - Maneja errores de carga con fallback a placeholder
 * - Mantiene aspect ratio con object-fit: cover
 *
 * @example
 * // Imagen normal
 * <ImageToPlace
 *   src="/gallery/salon.jpg"
 *   alt="Interior del salón"
 * />
 *
 * @example
 * // Imagen que puede fallar (usa placeholder automático)
 * <ImageToPlace
 *   src={imagenDinamica}
 *   alt="Foto del equipo"
 * />
 *
 * @example
 * // Sin src (muestra placeholder)
 * <ImageToPlace alt="Próximamente" />
 */

import "./ImageToPlace.css";
import placeholder from "../../assets/placeholder.png";

interface ImageToPlaceProps {
  /** URL de la imagen (opcional, usa placeholder si está vacía) */
  src?: string;
  /** Texto alternativo para accesibilidad */
  alt?: string;
}

export default function ImageToPlace({ src, alt }: ImageToPlaceProps) {
  const imgSrc = src && src.trim() ? src : placeholder;

  return (
    <div className="image-place">
      <img
        src={imgSrc}
        alt={alt || "imagen"}
        onError={(e) => {
          e.currentTarget.src = placeholder;
        }}
      />
    </div>
  );
}
