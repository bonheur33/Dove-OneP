import { useState, useEffect, useRef } from "react";

const media = [
  { type: "image", src: "/images/galerie1.jpg", alt: "Projet communication 1" },
  { type: "image", src: "/images/galerie2.jpg", alt: "Projet audiovisuel 2" },
  { type: "image", src: "/images/galerie3.jpg", alt: "Projet événementiel 3" },
  { type: "video", src: "/videos/reel1.mp4", alt: "Vidéo événement 1" },
  { type: "video", src: "/videos/reel2.mp4", alt: "Vidéo événement 2" },
  { type: "image", src: "/images/galerie4.jpg", alt: "Projet communication 4" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (media[current].type === "video") return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [current]);

  useEffect(() => {
    if (media[current].type === "video" && videoRef.current) {
      videoRef.current.pause();
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
        padding: "60px 6%",
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
        Découvrez quelques-uns de nos projets en communication,
        audiovisuel et événementiel.
      </p>

      {/* SLIDER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          height: "450px", // ✅ HAUTEUR FIXE IDENTIQUE
          margin: "0 auto",
          borderRadius: "12px",
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
              height: "100%",
              objectFit: "cover", // remplit parfaitement
            }}
          />
        ) : (
          <video
            ref={videoRef}
            src={media[current].src}
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // même comportement que image
            }}
          />
        )}

        {/* NAVIGATION */}
        <button onClick={prevSlide} style={navButtonStyle("left")}>
          ‹
        </button>

        <button onClick={nextSlide} style={navButtonStyle("right")}>
          ›
        </button>
      </div>

      {/* INDICATEURS */}
      <div
        style={{
          marginTop: "18px",
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

const navButtonStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "12px",
  transform: "translateY(-50%)",
  background: "#ff9e1d",
  border: "none",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "1.5rem",
  fontWeight: "700",
});

export default Gallery;