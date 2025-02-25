import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import RegistroPage from './pages/RegistroPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ErrorNotFoundPage from './pages/ErrorNotFoundPage.jsx';
import MyNavbar from './components/MyNavbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [participants, setParticipants] = useState([]);

  return (
    <>

    <MyNavbar/>

     <Routes>
      <Route path='/' element={<HomePage participants={participants} />} />
      <Route path='/registro' element={<RegistroPage participants={participants} setParticipants={setParticipants} />} />
      <Route path='/error' element={<ErrorPage />} />
      <Route path='*' element={<ErrorNotFoundPage />} />
    </Routes>

    <Footer/>

    </>
  )
}

export default App
