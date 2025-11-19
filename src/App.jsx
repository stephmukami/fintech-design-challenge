import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './globals.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/HomePageNavbar';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
