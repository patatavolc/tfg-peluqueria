import "./MapEmbed.css";

interface MapEmbedProps {
  /**
   * URL de Google Maps para incrustar
   */
  src: string;

  /**
   * Titulo para accesibilidad
   */
  title: string;
}

export default function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <div className="map-embed__container">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        className="map-embed__iframe"
      ></iframe>
    </div>
  );
};
