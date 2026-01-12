const Services = () => {
  return (
    <section className="services reveal">
      <h2>Nos services</h2>

      <div className="services-grid">
        {/* SERVICE 1 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/logocreate.png')" }}
        >
          <div className="overlay">
            <div className="content">
              <h3>Communication visuelle & graphisme</h3>
              <p>
                Nous concevons des identités visuelles et supports de communication
                cohérents, modernes et adaptés à vos objectifs.
              </p>

              <ul>
                <li>Création de logos et chartes graphiques</li>
                <li>Affiches, flyers, dépliants, brochures</li>
                <li>Supports institutionnels et publicitaires</li>
                <li>Visuels pour réseaux sociaux et web</li>
                <li>Branding et image de marque</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/DSC_0498.JPG')" }}
        >
          <div className="overlay">
            <div className="content">
              <h3>Production audiovisuelle & impression</h3>
              <p>
                Nous réalisons des contenus professionnels pour valoriser
                votre image, vos événements et votre communication.
              </p>

              <ul>
                <li>Photographie et vidéo professionnelles</li>
                <li>Impression flyers, affiches, brochures</li>
                <li>Cartes de visite et supports corporate</li>
                <li>Kakemonos, bâches, roll-up, panneaux</li>
                <li>Goodies personnalisés (t-shirts, casquettes, mugs)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/BP-2.jpg')" }}
        >
          <div className="overlay">
            <div className="content">
              <h3>Événementiel & logistique</h3>
              <p>
                Nous accompagnons l’organisation et la mise en œuvre
                d’événements professionnels, culturels et institutionnels.
              </p>

              <ul>
                <li>Organisation de conférences, séminaires et ateliers</li>
                <li>Couverture photo et vidéo</li>
                <li>Sonorisation et projection</li>
                <li>Décoration et installation</li>
                <li>
                  Logistique complète : location de chaises, chapiteaux,
                  services traiteur, coordination générale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
