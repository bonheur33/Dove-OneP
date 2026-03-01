import { useState, useEffect, useRef } from "react";

const media = [
  { type: "image", src: "/images/galerie1.jpg" },
  { type: "image", src: "/images/galerie2.jpg" },
  { type: "image", src: "/images/galerie3.jpg" },
  { type: "video", src: "/videos/reel1.mp4" },
  { type: "video", src: "/videos/reel2.mp4" },
  { type: "image", src: "/images/galerie4.jpg" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Auto slide images only
  useEffect(() => {
    if (media[current].type === "video") return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // Auto play video safely
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

  // 📱 Swipe mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    isDragging.current = false;
  };

  return (
    <section
      id="gallery"
      style={{
        background: "#383838",
        color: "#fff",
        padding: "60px 6%",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#ff9e1d" }}>Nos réalisations</h2>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "40px auto",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: "14px",
          background: "#000",
        }}
      >
        {/* SLIDES WRAPPER */}
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${media.length * 100}%`,
            transform: `translateX(-${current * (100 / media.length)}%)`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {media.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${100 / media.length}%`,
                position: "relative",
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <video
                  ref={index === current ? videoRef : null}
                  src={item.src}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* NAV BUTTONS */}
        <button onClick={prevSlide} style={navButton("left")}>
          ‹
        </button>
        <button onClick={nextSlide} style={navButton("right")}>
          ›
        </button>
      </div>

      {/* INDICATORS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        {media.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: i === current ? "#ff9e1d" : "#ccc",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

const navButton = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "15px",
  transform: "translateY(-50%)",
  background: "#ff9e1d",
  border: "none",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export default Gallery;