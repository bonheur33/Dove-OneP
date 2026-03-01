import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal.jsx";

function EventOffers() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const formRef = useRef(null);

  // Lazy load background image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/event-bg.jpeg";
    img.onload = () => setBgLoaded(true);
  }, []);

  const redirectWhatsApp = () => {
    const phone = "242064237233";
    const text = encodeURIComponent(
      "Bonjour Dove Services, je viens d’envoyer une demande de réservation via votre site."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const sendReservation = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yo5eira",
        "template_ph06n47",
        formRef.current,
        "BesHPujC5p9dQUIgj"
      )
      .then(() => {
        setSuccess(true);
        e.target.reset();

        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
          redirectWhatsApp();
        }, 2000);
      })
      .catch(() => {
        alert("Erreur lors de l’envoi. Veuillez réessayer.");
      });
  };

  return (
    <section
      id="event-offers"
      style={{
        position: "relative",
        backgroundColor: "#1e1e1e", // fallback
        backgroundImage: bgLoaded
          ? "url(/images/event-bg.jpeg)"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "clamp(70px, 10vw, 100px) 5%",
        color: "#ffffff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      />

      {/* CONTENU */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          animation: "fadeUp 0.9s ease forwards",
        }}
      >
        <h2
          style={{
            color: "#ff9e1d",
            fontSize: "clamp(1.9rem, 5vw, 2.6rem)",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Offres événementielles
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
            marginBottom: "35px",
            maxWidth: "720px",
            marginInline: "auto",
            lineHeight: "1.7",
          }}
        >
          Conférences, séminaires, ateliers et événements privés.
          <br />
          Réservez votre événement facilement et rapidement.
        </p>

        {/* BOUTON */}
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "15px 42px",
            backgroundColor: "#ff9e1d",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#1e1e1e",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "transform 0.25s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.backgroundColor = "#e68a00";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#ff9e1d";
          }}
        >
          Réserver un événement
        </button>

        {/* MODAL */}
        {open && (
          <Modal onClose={() => setOpen(false)}>
            <div style={{ maxWidth: "420px", margin: "0 auto" }}>
              <h3 style={{ marginBottom: "15px" }}>
                Réservation d’événement
              </h3>

              {success && (
                <div
                  style={{
                    background: "#1e1e1e",
                    border: "1px solid #ff9e1d",
                    color: "#ff9e1d",
                    padding: "12px",
                    borderRadius: "6px",
                    marginBottom: "15px",
                    fontWeight: "600",
                  }}
                >
                  Demande envoyée avec succès !
                  <br />
                  Nous vous contacterons très rapidement.
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={sendReservation}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input name="nom" placeholder="Nom complet" required />
                <input
                  name="email"
                  type="email"
                  placeholder="Adresse email"
                  required
                />
                <input
                  name="telephone"
                  placeholder="Téléphone / WhatsApp"
                  required
                />

                <select name="type_evenement" required>
                  <option value="">Type d’événement</option>
                  <option>Conférence</option>
                  <option>Séminaire</option>
                  <option>Atelier / Formation</option>
                  <option>Mariage</option>
                  <option>Anniversaire</option>
                  <option>Autre</option>
                </select>

                <input name="date_evenement" type="date" required />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Décrivez brièvement votre événement"
                />

                <button
                  type="submit"
                  style={{
                    padding: "12px",
                    background: "#ff9e1d",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </Modal>
        )}
      </div>

      {/* ANIMATION CSS INLINE */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default EventOffers;
