import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)