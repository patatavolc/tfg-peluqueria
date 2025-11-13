import "./ImageToPlace.css";
import placeholder from "../../assets/placeholder.png";

interface ImageToPlaceProps {
  src?: string;
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
