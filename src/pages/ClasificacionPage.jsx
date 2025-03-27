import React from 'react'

function ClasificacionPage() {
  return (
    <div className="container">
    <h1 className="title">Clasificación</h1>
    <table className="clasificacion-table">
        <thead>
            <tr className="clasificacion-tr">
                <th>Grupo uno</th>
                <th>V</th>
                <th>D</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Germán - Yeray</td><td>3</td><td>1</td></tr>
            <tr><td>Rodera - Ivana</td><td>2</td><td>2</td></tr>
            <tr><td>Toni - Edu</td><td>2</td><td>2</td></tr>
            <tr><td>Mario - David</td><td>2</td><td>2</td></tr>
            <tr><td>Marina - Alex</td><td>1</td><td>3</td></tr>
        </tbody>
    </table>
    <table className="clasificacion-table">
        <thead>
            <tr className="clasificacion-tr">
                <th>Grupo dos</th>
                <th>V</th>
                <th>D</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Iván - Anabel</td><td>4</td><td>0</td></tr>
            <tr><td>Arantxa - Antonio</td><td>4</td><td>0</td></tr>
            <tr><td>Medy - Adri</td><td>2</td><td>2</td></tr>
            <tr><td>Matin - Manu</td><td>1</td><td>3</td></tr>
            <tr><td>Raquel - María</td><td>1</td><td>3</td></tr>
            <tr><td>Cintia - Alejandro</td><td>0</td><td>4</td></tr>
        </tbody>
    </table>
</div>
  )
}

export default ClasificacionPage