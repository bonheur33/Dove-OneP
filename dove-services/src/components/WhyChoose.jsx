function WhyChoose() {
  return (
    <section
      id="why-choose"
      style={{
        padding: "80px 5%",
        background: "#1e1e1e",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      {/* TITRE */}
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          fontWeight: "700",
        }}
      >
        Pourquoi choisir Dove Services ?
      </h2>

      {/* SOUS-TITRE */}
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          maxWidth: "700px",
          lineHeight: "1.8",
          color: "#f0f0f0",
        }}
      >
        Expertise multidisciplinaire et accompagnement personnalisé. Nous combinons
        créativité, rigueur et innovation pour vous offrir des solutions de communication,
        audiovisuel et événementiel sur-mesure, adaptées à vos besoins.
      </p>

      {/* CARDS DE VALEURS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {[
          { title: "Professionnalisme", desc: "Rigueur et qualité dans tous nos projets." },
          { title: "Créativité", desc: "Solutions innovantes et visuellement impactantes." },
          { title: "Fiabilité", desc: "Respect des délais et accompagnement constant." },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#2a2a2a",
              borderRadius: "10px",
              padding: "20px",
              minWidth: "220px",
              maxWidth: "300px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              transition: "transform 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h3 style={{ color: "#ff9e1d", marginBottom: "12px" }}>{item.title}</h3>
            <p style={{ color: "#f0f0f0", fontSize: "0.95rem" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
