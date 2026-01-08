import { useState, useEffect } from "react";

// Images et vidéos à afficher dans la galerie
const media = [
  { type: "image", src: "/images/galerie1.jpg", alt: "Projet communication 1" },
  { type: "image", src: "/images/galerie2.JPG", alt: "Projet audiovisuel 2" },
  { type: "image", src: "/images/galerie3.JPG", alt: "Projet événementiel 3" },
  { type: "video", src: "/videos/clip1.mp4", alt: "Vidéo événement 1" },
  { type: "image", src: "/images/galerie4.JPG", alt: "Projet communication 4" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  // Slider automatique toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + media.length) % media.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % media.length);

  return (
    <section
      className="gallery"
      style={{
        background: "#383838",
        color: "#ffffff",
        padding: "60px 8%",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#ff9e1d", fontSize: "2.5rem", marginBottom: "20px" }}>
        Galerie
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Découvrez quelques-uns de nos projets en communication, audiovisuel et événementiel.
      </p>

      {/* Slider */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {media[current].type === "image" ? (
          <img
            src={media[current].src}
            alt={media[current].alt}
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        ) : (
          <video
            src={media[current].src}
            controls
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        )}

        {/* Boutons précédent / suivant */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          &#10095;
        </button>
      </div>

      {/* Indicateurs */}
      <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "8px" }}>
        {media.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: i === current ? "#ff9e1d" : "#ffffff",
              display: "inline-block",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
