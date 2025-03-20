import React from "react";
import { useNavigate } from "react-router-dom";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../assets/videoPadel.mp4";

const HomePage = () => {
  const navigate = useNavigate();

  const handleParticipate = () => {
      navigate("/participantes");
  };

  return (
    <section className="page">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>
      <div className="page__content">
        <h1>Cumpleaños</h1>
        <h2>World Padel Tour</h2>
        <h3>¡Próximamente!</h3>
        <FlipClockCountdown
          to={new Date("March 23, 2025 00:00:00").getTime()}
          className="flip-clock"
          labels={["DÍAS", "HORAS", "MINUTOS", "SEGUNDOS"]}
          duration={0.5}
        />
        <button className="btn" onClick={handleParticipate}>
          ¡Paticipantes!
        </button>
      </div>
    </section>
  );
};

export default HomePage;
