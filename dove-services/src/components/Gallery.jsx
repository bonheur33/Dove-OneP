import { useState, useEffect, useRef } from "react";

// Médias de la galerie
const media = [
  { type: "image", src: "/images/galerie1.jpg", alt: "Projet communication 1" },
  { type: "image", src: "/images/galerie2.jpg", alt: "Projet audiovisuel 2" },
  { type: "image", src: "/images/galerie3.jpg", alt: "Projet événementiel 3" },
  { type: "video", src: "/videos/cip2.mp4", alt: "Vidéo événement 1" },
  { type: "image", src: "/images/galerie4.jpg", alt: "Projet communication 4" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // ⏱ Auto-slide uniquement pour les images
  useEffect(() => {
    if (media[current].type === "video") return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // ▶️ Forcer la lecture automatique de la vidéo
  useEffect(() => {
    if (media[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

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
        Nos réalisations
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
          borderRadius: "12px",
          overflow: "hidden",
          background: "#000",
          minHeight: "clamp(240px, 60vw, 420px)", // ✅ FIX IMPORTANT
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {media[current].type === "image" ? (
          <img
            src={media[current].src}
            alt={media[current].alt}
            loading="lazy"
            onError={(e) => (e.target.src = "/images/fallback.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <video
            ref={videoRef}
            src={media[current].src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/video-cover.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "#000",
              display: "block",
            }}
          >
            Votre navigateur ne supporte pas la vidéo.
          </video>
        )}

        {/* BOUTONS */}
        <button
          onClick={prevSlide}
          aria-label="Image précédente"
          style={{
            position: "absolute",
            top: "50%",
            left: "12px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.4rem",
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
            right: "12px",
            transform: "translateY(-50%)",
            background: "#ff9e1d",
            border: "none",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1.4rem",
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
