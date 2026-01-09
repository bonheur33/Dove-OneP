function Modal({ children, onClose }) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "16px",
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(0,0,0,0.4)",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "420px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "24px",
          position: "relative",
          boxShadow: "0 10px 40px #ffffff",
        }}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
