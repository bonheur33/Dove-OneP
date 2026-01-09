import { useState, useEffect } from "react";

// Médias de la galerie
const media = [
  { type: "image", src: "/images/galerie1.jpg", alt: "Projet communication 1" },
  { type: "image", src: "/images/galerie2.JPG", alt: "Projet audiovisuel 2" },
  { type: "image", src: "/images/galerie3.JPG", alt: "Projet événementiel 3" },
  { type: "video", src: "/videos/clip1.mp4", alt: "Vidéo événement 1" },
  { type: "image", src: "/images/galerie4.JPG", alt: "Projet communication 4" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  // Slider automatique (pause sur mobile acceptable)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + media.length) % media.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % media.length);

  return (
    <section
      id="gallery"
      style={{
        background: "#383838",
        color: "#ffffff",
        padding: "50px 6%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
          marginBottom: "15px",
        }}
      >
        Galerie
      </h2>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: "700px",
          margin: "0 auto 30px",
          lineHeight: "1.6",
        }}
      >
        Découvrez quelques-uns de nos projets en communication, audiovisuel
        et événementiel.
      </p>

      {/* SLIDER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {media[current].type === "image" ? (
          <img
            src={media[current].src}
            alt={media[current].alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "clamp(240px, 60vw, 420px)",
              objectFit: "cover",
            }}
          />
        ) : (
          <video
            src={media[current].src}
            controls
            playsInline
            style={{
              width: "100%",
              height: "clamp(240px, 60vw, 420px)",
              objectFit: "cover",
            }}
          />
        )}

        {/* BOUTONS */}
        <button
          onClick={prevSlide}
          aria-label="Image précédente"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          aria-label="Image suivante"
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          ›
        </button>
      </div>

      {/* INDICATEURS */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {media.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: i === current ? "#ff9e1d" : "#cccccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
