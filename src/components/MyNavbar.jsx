import { Link } from "react-router-dom";
import Logo from '../assets/list-ball-red.svg'

function MyNavbar() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="icon-logo" />Padel
      </Link>

      <div className="navbar-links">
        <Link to="/clasificacion" className="navbar-link">
          Clasificación
        </Link>
        <Link to="/participantes" className="navbar-link">
          Participantes
        </Link>
      </div>
    </nav>
  )
}

export default MyNavbar