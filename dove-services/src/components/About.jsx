function About() {
  return (
    <section
      className="about"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "60px 5%",
        background: "#383838",
        color: "#ffffff",
      }}
    >
      {/* TITRE */}
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        À propos de Dove Services
      </h2>

      {/* CONTENEUR IMAGE + TEXTE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* IMAGE DE L'ÉQUIPE */}
        <div style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}>
          <img
            src="/images/equipe-dove.JPG" // place ton image dans public/images/
            alt="Équipe Dove Services"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
            }}
            loading="lazy"
          />
        </div>

        {/* TEXTE DESCRIPTIF */}
        <div style={{ maxWidth: "800px", fontSize: "1.05rem", lineHeight: "1.8" }}>
          <p>
            <strong style={{ color: "#ff9e1d", marginBottom: "12px" }}>Qui sommes-nous ?</strong><br />
            Dove Services est une agence de communication et de production dédiée à la conception
            de solutions visuelles et médiatiques professionnelles.
          </p>

          <p>
            <strong style={{ color: "#ff9e1d", marginBottom: "12px" }}>Notre mission :</strong><br />
            Accompagner nos clients dans la valorisation de leur image, la promotion de leurs activités
            et la réussite de leurs événements.
          </p>

          <p>
            Grâce à une approche intégrée, nous intervenons dans la création graphique, l’imprimerie,
            la production photo et vidéo, ainsi que dans l’organisation et la couverture d’événements.
          </p>

          <p>
            <strong style={{ color: "#ff9e1d", marginBottom: "12px" }}>Notre vision :</strong><br />
            Devenir une agence de référence en République du Congo dans le domaine de la communication,
            de la production audiovisuelle et de l’événementiel, au service du développement des entreprises,
            des institutions et des organisations.
          </p>

          <p>
            <strong style={{ color: "#ff9e1d", marginBottom: "12px" }}>Nos valeurs :</strong><br />
            - Professionnalisme et rigueur<br />
            - Créativité et innovation<br />
            - Respect des délais et des engagements<br />
            - Qualité du service et satisfaction client<br />
            - Adaptabilité aux réalités du terrain
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
