import React from 'react'
import ReactDOM from 'react-dom/client'

//Import App
import App from './App'
import './SassStyles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)