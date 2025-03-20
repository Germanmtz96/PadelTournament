import React, { useState } from 'react'

function PartidosPage() {
  
  const [fondoClase, setFondoClase] = useState("");

  const cambiarFondo = (partido) => {
    setFondoClase(`bg-partido${partido}`);
  };

  return (
    <div className='container'>
      <h1 className="title">Partidos</h1>
      <div className="btns">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <button
            key={num}
            onClick={() => cambiarFondo(num)}
            className="btn-partidos"
          >
            {num}
          </button>
        ))}
      </div>
      <div className={`bg-partido1 ${fondoClase}`} />

    </div>
    
  )
}

export default PartidosPage