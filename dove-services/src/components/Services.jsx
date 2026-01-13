import { useState } from "react";

const Services = () => {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section className="services reveal">
      <h2>Nos services</h2>

      <div className="services-grid">

        {/* SERVICE 1 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/logocreate.png')" }}
          onClick={() => toggleService(1)}
        >
          <div className="overlay">
            <div className="content">
              <h3>Communication visuelle & graphisme</h3>
              <p>
                Nous concevons des identités visuelles et supports de communication
                cohérents, modernes et adaptés à vos objectifs.
              </p>

              {openService === 1 && (
                <ul>
                  <li>Création de logos et chartes graphiques</li>
                  <li>Affiches, flyers, dépliants, brochures</li>
                  <li>Supports institutionnels et publicitaires</li>
                  <li>Visuels pour réseaux sociaux et web</li>
                  <li>Branding et image de marque</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/print.png')" }}
          onClick={() => toggleService(2)}
        >
          <div className="overlay">
            <div className="content">
              <h3>Imprimerie & personnalisation</h3>
              <p>
                Nous assurons la production de supports imprimés de qualité,
                avec des finitions professionnelles.
              </p>

              {openService === 2 && (
                <ul>
                  <li>Flyers, affiches, brochures, cartes de visite</li>
                  <li>Kakemonos, bâches, roll-up, panneaux</li>
                  <li>T-shirts, casquettes, mugs, goodies personnalisés</li>
                  <li>Supports événementiels et corporate</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/DSC_0498.JPG')" }}
          onClick={() => toggleService(3)}
        >
          <div className="overlay">
            <div className="content">
              <h3>Production audiovisuelle</h3>
              <p>
                Nous réalisons des contenus photo et vidéo professionnels
                pour valoriser votre image et vos activités.
              </p>

              {openService === 3 && (
                <ul>
                  <li>Photographie professionnelle</li>
                  <li>Vidéos promotionnelles et institutionnelles</li>
                  <li>Captation et montage événementiel</li>
                  <li>Clips, interviews et reportages</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* SERVICE 4 */}
        <div
          className="service-card"
          style={{ backgroundImage: "url('/services/BP-2.jpg')" }}
          onClick={() => toggleService(4)}
        >
          <div className="overlay">
            <div className="content">
              <h3>Événementiel & service logistique</h3>
              <p>
                Organisation, coordination et gestion complète
                de vos événements professionnels et privés.
              </p>

              {openService === 4 && (
                <ul>
                  <li>Conférences, séminaires et ateliers</li>
                  <li>Couverture photo et vidéo</li>
                  <li>Sonorisation et projection</li>
                  <li>Décoration et installation</li>
                  <li>
                    Logistique : chaises, chapiteaux, traiteur,
                    coordination générale
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
