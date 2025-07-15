import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>,
)
