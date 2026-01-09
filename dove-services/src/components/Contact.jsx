function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 5%",
        background: "#383838",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
      }}
    >
      {/* TITRE */}
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          marginBottom: "20px",
        }}
      >
        Contactez-nous
      </h2>

      {/* INFORMATIONS */}
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "600px" }}>
        <p>
          📍 <strong>Localisation :</strong> Brazzaville – Bacongo
        </p>
        <p>
          ✉️ <strong>Email :</strong> <a href="mailto:contact@doveservices.cg" style={{ color: "#ff9e1d", textDecoration: "none" }}>contact@doveservices.cg</a>
        </p>
        <p>
          📞 <strong>Téléphone / WhatsApp :</strong> <a href="https://wa.me/24264237233" target="_blank" rel="noopener noreferrer" style={{ color: "#ff9e1d", textDecoration: "none" }}>+242 642 372 33</a>
        </p>
      </div>

    </section>
  );
}

export default Contact;
