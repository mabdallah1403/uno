import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Cards_in_Hand from './Front End Cards/Cards_in_Hand.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cards_in_Hand />
  </StrictMode>,
)
