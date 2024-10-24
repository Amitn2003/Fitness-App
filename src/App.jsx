import React, { useState } from 'react'
import Navbar from './components/Navbar';
import HomePage from './page/HomePage'
// import { Route, Routes,  } from 'react-router-dom';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import Features from './page/Features';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';
import RegistrationPage from './page/RegistrationPage';
import DashboardPage from './page/DashboardPage';
import ExerciseSelection from './page/ExerciseSelection';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/"  element={<HomePage/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/select-exercise" element={<ExerciseSelection/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
