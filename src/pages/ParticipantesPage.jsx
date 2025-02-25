import React from 'react'

function ParticipantesPage({ participants }) {
  return (
    <div className="participantes-container">
      <h1 className="participantes-title">Participantes</h1>

      <p className="participantes-total">{participants.length}/20</p>
      {participants.length === 0 ? (
        <p className="participantes-empty">No hay participantes registrados.</p>
      ) : (
        <ul className="participantes-list">
          {participants.map((participants, index) => (
            <li key={index} className="participante-item">{participants}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ParticipantesPage