import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal.jsx";

function EventOffers() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

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
        backgroundImage: "url('/images/event-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 5%",
        color: "#ffffff",
        textAlign: "center",
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
      ></div>

      {/* CONTENU */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2
          style={{
            color: "#ff9e1d",
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Offres événementielles
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            marginBottom: "30px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
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
            padding: "14px 36px",
            backgroundColor: "#ff9e1d",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#1e1e1e",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "transform 0.2s, background 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
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
            <div
              style={{
                maxWidth: "420px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
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
                <input name="email" type="email" placeholder="Adresse email" required />
                <input name="telephone" placeholder="Téléphone / WhatsApp" required />

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
    </section>
  );
}

export default EventOffers;
