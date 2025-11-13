/**
 * TeamMemberCard Component
 *
 * Tarjeta para mostrar miembros del equipo con foto, nombre y cargo.
 * Incluye imagen placeholder por defecto y manejo de errores de carga.
 *
 * @example
 * // Con imagen
 * <TeamMemberCard
 *   name="María José"
 *   job="Peluquera Senior"
 *   image="/images/maria.jpg"
 * />
 *
 * @example
 * // Sin imagen (usa placeholder automático)
 * <TeamMemberCard
 *   name="Claudia"
 *   job="Esteticista"
 * />
 *
 * @example
 * // Múltiples miembros en grid
 * <Grid columns={3}>
 *   {teamMembers.map((member, index) => (
 *     <TeamMemberCard
 *       key={index}
 *       name={member.name}
 *       job={member.job}
 *       image={member.image}
 *     />
 *   ))}
 * </Grid>
 */

import "./TeamMemberCard.css";
import placeholder from "../../assets/placeholder.png";

interface TeamMemberCardProps {
  /** Nombre del miembro del equipo */
  name: string;
  /** Cargo o puesto del miembro */
  job: string;
  /** URL de la foto (opcional, usa placeholder si no se proporciona) */
  image?: string;
}

export default function TeamMemberCard({
  name,
  job,
  image,
}: TeamMemberCardProps) {
  const src = image || placeholder;

  return (
    <div className="team-member-card">
      <img
        src={src}
        alt={name}
        className="team-member-card__image"
        onError={(e) => {
          e.currentTarget.src = placeholder;
        }}
      />
      <div className="team-member-card__content">
        <p className="team-member-card__name">{name}</p>
        <small className="team-member-card__job">{job}</small>
      </div>
    </div>
  );
}
