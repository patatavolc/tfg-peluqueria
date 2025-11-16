import Button from "../Button/Button.tsx";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  statement: string;
}
export default function ProductCard({
  title,
  description,
  price,
  imageUrl,
  statement,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <div className="product-card__info">
          <p className="product-card__price">${price.toFixed(2)}</p>
          <p
            className={`product-card__state product-card__state--${statement
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {statement}
          </p>
        </div>
        <Button text="Añadir al carrito" />
      </div>
    </div>
  );
}
