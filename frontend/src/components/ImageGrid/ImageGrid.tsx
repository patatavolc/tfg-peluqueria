import './ImageGrid.css';
import ImageToPlace from '../ImageToPlace/ImageToPlace.tsx';

interface ImageGridProps {
  images: string[];
}

export default function ImageGrid({images}: ImageGridProps) {
  const max = 5;
  const items = images.slice(0, max);

  return (
    <div className='parent'>
      {items.map((src, i) =>(
        <div key={i} className={`div${i +1}`}>
          <ImageToPlace src={src} alt={`Imagen ${i + 1}`} />
        </div>
      ))}
    </div>
  )
}