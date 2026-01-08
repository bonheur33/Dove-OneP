import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal.jsx";

function EventOffers() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  // Sécurise le rendu après lazy loading
  useEffect(() => {
    setMounted(true);
  }, []);

  const redirectWhatsApp = () => {
    const phone = "24264237233"; // ⚠️ SANS +
    const text = encodeURIComponent(
      "Bonjour Dove Services, je viens d’envoyer une demande de réservation via votre site."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const sendReservation = (e) => {
    e.preventDefault();

    // 1️⃣ Envoi Email
    emailjs
      .sendForm(
        "service_yo5eira",
        "template_ph06n47",
        formRef.current,
        "BesHPujC5p9dQUIgj"
      )
      .then(() => {
        // 2️⃣ Enregistrement backend
        fetch("http://localhost:8000/api/reservations/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: e.target.nom.value,
            email: e.target.email.value,
            telephone: e.target.telephone.value,
            type_evenement: e.target.type_evenement.value,
            date_evenement: e.target.date_evenement.value,
            message: e.target.message.value,
          }),
        }).catch(() => {
          console.warn("Backend indisponible, email déjà envoyé.");
        });

        setOpen(false);
        e.target.reset();
        redirectWhatsApp();
      })
      .catch(() => {
        alert("Erreur lors de l’envoi. Veuillez réessayer.");
      });
  };

  if (!mounted) return null;

  return (
    <section
      id="event-offers"
      className="event-offers reveal"
      style={{
        background: "#383838",
        color: "#ffffff",
        padding: "80px 8%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ff9e1d",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        Offres événementielles
      </h2>

      <p style={{ fontSize: "1.2rem", marginBottom: "35px" }}>
        Conférences, séminaires, ateliers et événements privés.
      </p>

      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "14px 34px",
          backgroundColor: "#ff9e1d",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#1e1e1e",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        Réserver un événement
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3 style={{ marginBottom: "20px" }}>
            Réservation d’événement
          </h3>

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

            <input
              name="date_evenement"
              type="date"
              required
            />

            <textarea
              name="message"
              placeholder="Décrivez brièvement votre événement"
              rows="4"
            />

            <button
              type="submit"
              style={{
                padding: "12px",
                background: "#ff9e1d",
                color: "#1e1e1e",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Envoyer la demande
            </button>
          </form>
        </Modal>
      )}
    </section>
  );
}

export default EventOffers;
