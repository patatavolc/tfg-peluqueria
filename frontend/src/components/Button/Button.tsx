/**
 * Button Component
 *
 * Botón reutilizable con múltiples variantes, tamaños y estados.
 * Mantiene un estilo consistente en toda la aplicación.
 *
 * @example
 * // Botón primario (por defecto)
 * <Button text="Reservar Cita" onClick={handleClick} />
 *
 * @example
 * // Botón secundario pequeño
 * <Button
 *   text="Cancelar"
 *   variant="secondary"
 *   size="small"
 *   onClick={handleCancel}
 * />
 *
 * @example
 * // Botón outline grande
 * <Button
 *   text="Más Información"
 *   variant="outline"
 *   size="large"
 * />
 *
 * @example
 * // Botón deshabilitado
 * <Button
 *   text="Guardar"
 *   onClick={handleSave}
 *   disabled={!isFormValid}
 * />
 */

import "./Button.css";

interface ButtonProps {
  /** Texto a mostrar en el botón */
  text: string;
  /** Función a ejecutar al hacer click (opcional) */
  onClick?: () => void;
  /** Estilo del botón: 'primary' (morado), 'secondary' (borde morado), 'outline' (transparente con borde) */
  variant?: "primary" | "secondary" | "outline";
  /** Tamaño del botón: 'small', 'medium', 'large' */
  size?: "small" | "medium" | "large";
  /** Si true, deshabilita el botón y reduce opacidad */
  disabled?: boolean;
}

export default function Button({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
