import './ServiceCard.css'

interface ServiceCardProps {
  title: string;
  descripcion: string;
  image: string;
}

export default function ServiceCard({title, descripcion, image}: ServiceCardProps) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className='service-card__image' />
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{descripcion}</p>
      </div>
    </div>
  )
}