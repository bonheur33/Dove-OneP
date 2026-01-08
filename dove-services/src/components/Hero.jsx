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
    <section className="hero" style={{ padding: "100px 8%", textAlign: "center", background: "#383838", color: "#ffffff" }}>
      <h1 style={{ color: "#ff9e1d" }}>Dove Services</h1>
      <p>Agence de communication visuelle, production audiovisuelle et événementiel clé en main à Brazzaville.</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={scrollToContact}
          style={{
            background: "#ff9e1d",
            color: "#ffffff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          Contacter pour un devis
        </button>

        <button
          onClick={scrollToWhyChoose}
          style={{
            background: "#ffffff",
            color: "#383838",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Pourquoi choisir Dove Services ?
        </button>
      </div>
    </section>
  );
}

export default Hero;
