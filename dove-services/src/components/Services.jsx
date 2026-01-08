const Services = () => {
  return (
    <section className="services reveal">

      <h2>Nos services</h2>

      <div className="services-grid">
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/BJHT5826.JPG')" }}
        >
          <div className="overlay">
            <h3>Communication visuelle</h3>
            <p>
              Identité visuelle, impression et supports
              professionnels adaptés à votre image.
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/IMG_E3601.JPG')" }}
        >
          <div className="overlay">
            <h3>Production audiovisuelle</h3>
            <p>
              Vidéos institutionnelles, spots publicitaires,
              couverture photo & vidéo.
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/IMG_E3604.JPG')" }}
        >
          <div className="overlay">
            <h3>Événementiel clé en main</h3>
            <p>
              Organisation complète d’événements
              professionnels et privés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
