import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HamburgerProvider } from './context/HamburgerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HamburgerProvider>
    <App />
    </HamburgerProvider>
    
  </React.StrictMode>,
)
