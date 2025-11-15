import Button from "../Button/Button.tsx";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  // imageUrl: string;
  // statement: string;
}
export default function ProductCard({
  title,
  description,
  price,
}: ProductCardProps) {
  return(
    <div className="product-card">
      <img alt={title} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">${price.toFixed(2)}</p>
        <p className="product-card__state"></p>
      </div>
      <Button text="Añadir al carrito" />
    </div>
  )
}
