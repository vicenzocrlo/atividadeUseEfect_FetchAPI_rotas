import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

// O BrowserRouter "envolve" toda a aplicação e habilita a navegação
// entre páginas sem recarregar o navegador (é o que o material
// "Review_Rotas" pede na seção "Configurar o roteador principal").
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
