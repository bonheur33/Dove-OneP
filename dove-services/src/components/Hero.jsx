function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWhyChoose = () => {
    const whyChooseSection = document.getElementById("why-choose");
    if (whyChooseSection) {
      whyChooseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "80px 5%",
        textAlign: "center",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",

        /* IMAGE DE FOND */
        backgroundImage: "url('/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY SOMBRE POUR LA LISIBILITÉ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
        }}
      />

      {/* CONTENU */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* TITRE */}
        <h1
          style={{
            color: "#ff9e1d",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Dove Services
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            maxWidth: "650px",
            lineHeight: "1.6",
            color: "#f0f0f0",
          }}
        >
          Agence de communication visuelle, production audiovisuelle et
          événementiel clé en main à Brazzaville.
        </p>

        {/* BOUTONS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "20px",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <button
            onClick={scrollToContact}
            style={{
              background: "#ff9e1d",
              color: "#1e1e1e",
              border: "none",
              padding: "14px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Contacter pour un devis
          </button>

          <button
            onClick={scrollToWhyChoose}
            style={{
              background: "#ffffff",
              color: "#383838",
              border: "none",
              padding: "14px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Pourquoi choisir Dove Services ?
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
