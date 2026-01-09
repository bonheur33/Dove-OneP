const Services = () => {
  return (
    <section className="services reveal">

      <h2>Nos services</h2>

      <div className="services-grid">
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/logocreate.png')" }}
        >
          <div className="overlay">
            <h3>Communication visuelle & graphisme</h3>
            <p>
              Nous concevons des identités visuelles et supports de communication cohérents,
              modernes et adaptés à vos objectifs.
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/DSC_0498.JPG')" }}
        >
          <div className="overlay">
            <h3>Production audiovisuelle</h3>
            <p>
              Nous réalisons des contenus photo et vidéo professionnels
              pour la communication, la promotion et la 
              documentation de vos activités
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/BP-2.jpg')" }}
        >
          <div className="overlay">
            <h3>Événementiel clé en main</h3>
            <p>
              Nous accompagnons l’organisation et la mise
              en œuvre d’événements professionnels,
              culturels et institutionnels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
