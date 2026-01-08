function About() {
  return (
    <section className="about" style={{ display: "flex", flexWrap: "wrap", gap: "40px", padding: "60px 8%", background: "#383838", color: "#ffffff" }}>
      
      {/* Image de l'équipe */}
      <div style={{ flex: "1 1 300px", textAlign: "center" }}>
        <img
          src="/images/equipe-dove.jpeg" // → place ton image dans public/images/
          alt="Équipe Dove Services"
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      {/* Texte descriptif */}
      <div style={{ flex: "2 1 500px" }}>
        <h2 style={{ color: "#ff9e1d", fontSize: "2rem", marginBottom: "20px" }}>À propos de Dove Services</h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#ffffff" }}>
          <strong>Qui sommes-nous ?</strong><br />
          Dove Services est une agence de communication et de production dédiée à la conception de solutions visuelles et médiatiques professionnelles.
          <br /><br />
          <strong>Notre mission :</strong><br />
          Accompagner nos clients dans la valorisation de leur image, la promotion de leurs activités et la réussite de leurs événements.
          <br /><br />
          Grâce à une approche intégrée, nous intervenons dans la création graphique, l’imprimerie, la production photo et vidéo, ainsi que dans l’organisation et la couverture d’événements.
          <br /><br />
          <strong>Notre vision :</strong><br />
          Devenir une agence de référence en République du Congo dans le domaine de la communication, de la production audiovisuelle et de l’événementiel, au service du développement des entreprises, des institutions et des organisations.
          <br /><br />
          <strong>Nos valeurs :</strong><br />
          - Professionnalisme et rigueur<br />
          - Créativité et innovation<br />
          - Respect des délais et des engagements<br />
          - Qualité du service et satisfaction client<br />
          - Adaptabilité aux réalités du terrain
        </p>
      </div>
    </section>
  );
}

export default About;
