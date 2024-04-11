import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Homepage from "./pages/landingPage"
import Login from "./pages/loginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
