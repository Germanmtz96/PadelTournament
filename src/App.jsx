import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ParticipantesPage from './pages/ParticipantesPage.jsx';
import PartidosPage from './pages/PartidosPage.jsx'
import ClasificacionPage from './pages/ClasificacionPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ErrorNotFoundPage from './pages/ErrorNotFoundPage.jsx';
import MyNavbar from './components/MyNavbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  
 

  return (
    <>

    <MyNavbar/>

     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/participantes' element={<ParticipantesPage />} />
      <Route path='/partidos' element={<PartidosPage />} />
      <Route path='/clasificacion' element={<ClasificacionPage />} />
      <Route path='/error' element={<ErrorPage />} />
      <Route path='*' element={<ErrorNotFoundPage />} />
    </Routes>

    <Footer/>

    </>
  )
}

export default App
