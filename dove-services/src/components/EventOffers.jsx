import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal.jsx";

function EventOffers() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  const sendReservation = (e) => {
    e.preventDefault();

    /* ===========================
       1️⃣ ENREGISTREMENT DJANGO
       =========================== */
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
      // On ignore volontairement l’erreur
      // pour ne jamais bloquer EmailJS
      console.warn("Backend Django indisponible");
    });

    /* ===========================
       2️⃣ ENVOI EMAIL (EmailJS)
       =========================== */
    emailjs
      .sendForm(
        "service_yo5eira",
        "template_ph06n47",
        formRef.current,
        "BesHPujC5p9dQUIgj"
      )
      .then(() => {
        setOpen(false);
        redirectWhatsApp();
        e.target.reset();
      })
      .catch(() => {
        alert("Erreur lors de l’envoi. Veuillez réessayer.");
      });
  };

  /* ===========================
     3️⃣ REDIRECTION WHATSAPP
     =========================== */
  const redirectWhatsApp = () => {
    const phone = "24264237233";
    const text = encodeURIComponent(
      "Bonjour Dove Services, je viens d’envoyer une demande de réservation via votre site."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section>
      <h2>Offres événementielles</h2>
      <p>Conférences, séminaires, ateliers et événements privés.</p>

      <button onClick={() => setOpen(true)}>
        Réserver un événement
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3>Réservation d’événement</h3>

          <form ref={formRef} onSubmit={sendReservation}>
            <input
              name="nom"
              placeholder="Nom complet"
              required
            />

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
            ></textarea>

            <button type="submit">
              Envoyer la demande
            </button>
          </form>
        </Modal>
      )}
    </section>
  );
}

export default EventOffers;
