import "./TeamMemberCard.css";
import placeholder from "../../assets/placeholder.png"; // importa el asset

interface TeamMemberCardProps {
  name: string;
  job: string;
  image?: string; // ahora opcional
}

export default function TeamMemberCard({
  name,
  job,
  image,
}: TeamMemberCardProps) {
  const src = image || placeholder; // fallback si no viene o es undefined

  return (
    <div className="team-member-card">
      <img
        src={src}
        alt={name}
        className="team-member-card__image"
        onError={(e) => {
          e.currentTarget.src = placeholder;
        }} // fallback si falla carga
      />
      <div className="team-member-card__content">
        <p className="team-member-card__name">{name}</p>
        <small className="team-member-card__job">{job}</small>
      </div>
    </div>
  );
}
