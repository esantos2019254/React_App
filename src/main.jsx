import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Saludo } from './components/Saludo.jsx'
import { Padre } from './components/Padre.jsx'
import { Contador } from './components/Contador.jsx'
import { Efecto } from './components/Efecto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Bienvenidos a react</h1>

    <Saludo nombre={"Elmer"} apellido={"Santos"} edad={20} />

    <hr />

    <Padre />

    <Contador />

    <Efecto />

  </StrictMode>,
)
