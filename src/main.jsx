import React from 'react'
import ReactDOM from 'react-dom/client'
import './Main.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
