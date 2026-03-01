import { useState } from "react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Communication visuelle & graphisme",
      description:
        "Nous concevons des identités visuelles et supports de communication cohérents, modernes et adaptés à vos objectifs.",
      image: "/services/comvisuel.jpeg",
      items: [
        "Création de logos et chartes graphiques",
        "Affiches, flyers, dépliants, brochures",
        "Supports institutionnels et publicitaires",
        "Visuels pour réseaux sociaux et web",
        "Branding et image de marque",
      ],
    },
    {
      title: "Production audiovisuelle",
      description:
        "Nous réalisons des contenus photo et vidéo professionnels pour valoriser votre image et vos activités.",
      image: "/services/DSC_0498.JPG",
      items: [
        "Photographie professionnelle",
        "Vidéos institutionnelles et promotionnelles",
        "Couverture d’événements",
        "Montage vidéo et post-production",
      ],
    },
    {
      title: "Imprimerie & personnalisation",
      description:
        "Nous assurons la production de supports imprimés de qualité avec des finitions professionnelles.",
      image: "/services/Imprietperso.jpeg",
      items: [
        "Flyers, affiches, brochures, cartes de visite",
        "Kakemonos, bâches, roll-up, panneaux",
        "T-shirts, casquettes, mugs, goodies personnalisés",
        "Supports événementiels et corporate",
      ],
    },
    {
      title: "Événementiel & logistique",
      description:
        "Nous accompagnons l’organisation et la mise en œuvre d’événements professionnels, culturels et institutionnels.",
      image: "/services/BP-2.jpg",
      items: [
        "Organisation de conférences et séminaires",
        "Couverture photo et vidéo",
        "Sonorisation et projection",
        "Décoration et installation",
        "Logistique complète : chaises, chapiteaux, traiteur",
      ],
    },
  ];

  return (
    <section className="services reveal">
      <h2>Nos services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url('${service.image}')` }}
            onClick={() => toggleService(index)}
          >
            <div className="overlay">
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {activeIndex === index && (
                  <ul>
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <span className="cta">
                  {activeIndex === index
                    ? "Fermer"
                    : "Voir les détails"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
