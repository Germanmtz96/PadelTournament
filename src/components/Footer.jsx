import { Link } from "react-router-dom";
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Alicante, España</p>
          <p>📞 +34 637 65 15 78</p>
          <p>👤 Germán Martínez</p>
          <p>© 2025 Tour Mundial Pádel.</p>
        </div>

    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.231536117426!2d-0.5217855250212122!3d38.3463024790344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236708f687c1d%3A0xc164e263ca800bd1!2sBar%20Padel%20Premium%20Alicante!5e0!3m2!1ses!2ses!4v1741970581094!5m2!1ses!2ses" 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
       
        <div className="footer-section">
          <h4 >Información</h4>
          <ul>
            <li><Link to="/participantes">Participantes</Link></li>
            <li><Link to="/clasificacion">Clasificación</Link></li>
            <li><Link to="/partidos">Partidos</Link></li>
          </ul>
        </div>
  </div>
  )
}

export default Footer