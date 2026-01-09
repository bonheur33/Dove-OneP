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
        // Backend optionnel
        fetch("http://localhost:8000/api/reservations/create/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nom: e.target.nom.value,
            email: e.target.email.value,
            telephone: e.target.telephone.value,
            type_evenement: e.target.type_evenement.value,
            date_evenement: e.target.date_evenement.value,
            message: e.target.message.value,
          }),
        }).catch(() => {});

        setSuccess(true);
        e.target.reset();

        // Fermer modal + WhatsApp après 2s
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
        background: "#383838",
        color: "#ffffff",
        padding: "60px 5%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          marginBottom: "20px",
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
        }}
      >
        Conférences, séminaires, ateliers et événements privés. Réservez votre
        événement facilement et rapidement.
      </p>

      {/* BOUTON RÉSERVATION */}
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "14px 36px",
          backgroundColor: "#ff9e1d",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#1e1e1e",
          fontWeight: "600",
          fontSize: "1rem",
          marginBottom: "20px",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e68a00")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff9e1d")}
      >
        Réserver un événement
      </button>

      {/* MODAL */}
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Réservation d’événement</h3>

            {/* MESSAGE DE SUCCÈS */}
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
                ✅ Demande envoyée avec succès !
                <br />
                Nous vous contacterons très rapidement.
              </div>
            )}

            {/* FORMULAIRE */}
            <form
              ref={formRef}
              onSubmit={sendReservation}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <input
                name="nom"
                placeholder="Nom complet"
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
              <input
                name="email"
                type="email"
                placeholder="Adresse email"
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
              <input
                name="telephone"
                placeholder="Téléphone / WhatsApp"
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />

              <select
                name="type_evenement"
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              >
                <option value="">Type d’événement</option>
                <option>Conférence</option>
                <option>Séminaire</option>
                <option>Atelier / Formation</option>
                <option>Mariage</option>
                <option>Anniversaire</option>
                <option>Autre</option>
              </select>

              <input
                name="date_evenement"
                type="date"
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />

              <textarea
                name="message"
                placeholder="Décrivez brièvement votre événement"
                rows="4"
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
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
                  marginTop: "10px",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e68a00")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff9e1d")}
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default EventOffers;
