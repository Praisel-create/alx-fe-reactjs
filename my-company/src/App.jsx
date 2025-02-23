import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Services />} />
        <Route path='/' element={<Contact />} />
      </Router>
    </Router>
    </>
  )
}

export default App
