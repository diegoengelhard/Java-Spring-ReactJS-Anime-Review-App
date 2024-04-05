import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Home from './pages/HomePage';
import Create from './pages/CreatePage';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
