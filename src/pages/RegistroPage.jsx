import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoBg from "../assets/videoPadel.mp4";
import Modal from "../components/Modal.jsx";

import Pala from "../assets/pala.png";

const RegistroPage = ({ participants, setParticipants }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (participants.length >= 20) {
      setModalMessage("¡Cupo completo!");
      setShowModal(true);
      return;
    }

    if (nombre.trim()) {
      setParticipants((prevParticipants) => {
        const updatedParticipants = [...prevParticipants, nombre.trim()];
        setModalMessage("¡Registro exitoso!");
        setShowModal(true);
        return updatedParticipants;
      });
    } else {
      setModalMessage("Por favor, ingresa tu nombre.");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);

    if (modalMessage === "¡Registro exitoso!") {
      navigate("/");
    }
  };

  const goToParticipants = () => {
    navigate("/participantes");
  };

  return (
    <section className="page">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>
      <div className="page__content">
        <h2>Inscríbete al Torneo</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Escribe tu nombre aquí.."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn-input">
            Registrar
          </button>
        </form>
        <button className="participantes" onClick={goToParticipants}>
          <img src={Pala} alt="pala-icon" /> {participants.length}/20
        </button>
        <button className="btn-volver" onClick={() => navigate("/")}>
          Volver
        </button>
      </div>

      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </section>
  );
};

export default RegistroPage;
