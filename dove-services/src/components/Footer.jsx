function Footer() {
  return (
    <footer
      style={{
        background: "#1e1e1e",
        color: "#ffffff",
        padding: "50px 8%",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "35px",
        }}
      >
        {/* Branding */}
        <div>
          <h3 style={{ color: "#ff9e1d", marginBottom: "12px" }}>
            Dove Services
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.7",
              color: "#dddddd",
            }}
          >
            Agence de communication visuelle, production audiovisuelle
            et événementiel clé en main à Brazzaville.
          </p>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 style={{ color: "#ff9e1d", marginBottom: "12px" }}>Contact</h4>
          <p style={{ fontSize: "0.95rem", color: "#dddddd", lineHeight: "1.7" }}>
            18 bis Rue Dr Cureau, Bacongo – Brazzaville <br />
            Email : <strong>contact@doveservices.cg</strong> <br />
            WhatsApp : <strong>+242 06 42 37 233</strong>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "#ff9e1d", marginBottom: "12px" }}>Nos services</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.95rem",
              color: "#dddddd",
              lineHeight: "1.9",
            }}
          >
            <li>Communication visuelle</li>
            <li>Production photo & vidéo</li>
            <li>Imprimerie professionnelle</li>
            <li>Événementiel & couverture média</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 style={{ color: "#ff9e1d", marginBottom: "12px" }}>Suivez-nous</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.95rem",
            }}
          >
            <a
              href="https://www.facebook.com/share/1CuJJch6mE/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#dddddd", textDecoration: "none" }}
            >
              Facebook
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#dddddd", textDecoration: "none" }}
            >
              Instagram
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#dddddd", textDecoration: "none" }}
            >
              TikTok
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#dddddd", textDecoration: "none" }}
            >
              YouTube
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#dddddd", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Séparation */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #333",
          margin: "35px 0 15px",
        }}
      />

      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#aaaaaa",
        }}
      >
        © {new Date().getFullYear()} Dove Services — Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
